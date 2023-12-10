/* eslint-disable no-undef */
const todoList = require("../todo");

const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();

describe("Todolist Test suite", () => {
  beforeAll(() => {
    add({
      title: "Test todo",
      completed: false,
      dueDate: new Date().toISOString().slice(0, 10),
    });
  });
  const formate = (d) => {
    return d.toISOString().split("T")[0];
  };
  var datet = new Date();
  const yes = formate(new Date(new Date().setDate(datet.getDate() - 1)));
  const tmrow = formate(new Date(new Date().setDate(datet.getDate() + 1)));
  test("Should add new todo", () => {
    //expect(all.length).toBe(0);
    const todoItemsCount = all.length;
    add({
      title: "Test todo",
      completed: false,
      dueDate: new Date().toISOString().slice(0, 10),
    });
    expect(all.length).toBe(todoItemsCount + 1);
  });

  test("Should mark a todo as complete", () => {
    //expect(all.length).toBe(1);
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });
  test("Should retrive overdue items", () => {
    const y = {
      title: "Test overdue",
      completed: false,
      dueDate: yes,
    };
    add(y);
    expect(overdue().length).toBe(1);
  });
  test("Should retrive due today items", () => {
    expect(dueToday().length).toBe(2);
  });
  test("Should retrive due Later items", () => {
    const x = {
      title: "Test duelater",
      completed: false,
      dueDate: tmrow,
    };
    add(x);
    expect(dueLater().length).toBe(1);
  });
});
