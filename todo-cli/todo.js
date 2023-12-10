/* eslint-disable no-undef */
const todoList = () => {
  all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };
  const overdue = () => {
    const ovd = [];
    all.forEach((l) => {
      if (l.dueDate < today) {
        ovd.push(l);
      }
    });
    return ovd;
  };
  const dueToday = () => {
    const dt = [];
    all.forEach((l) => {
      if (l.dueDate === today) {
        dt.push(l);
      }
    });
    return dt;
  };
  const dueLater = () => {
    const dl = [];
    all.forEach((l) => {
      if (l.dueDate > today) {
        dl.push(l);
      }
    });
    return dl;
  };
  const toDisplayableList = (list) => {
    return list
      .map((j) => {
        const ip = j.completed ? "[x]" : "[ ]";
        const d = j.dueDate == today ? "" : j.dueDate;
        return `${ip} ${j.title.trim()} ${d.trim()}`;
      })
      .join("\n");
  };
  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};
const todos = todoList();
const formate = (d) => {
  return d.toISOString().split("T")[0];
};
var datet = new Date();
const today = formate(datet);
const yes = formate(new Date(new Date().setDate(datet.getDate() - 1)));
const tmrow = formate(new Date(new Date().setDate(datet.getDate() + 1)));
todos.add({ title: "Submit assignment", dueDate: yes, completed: false });
todos.add({ title: "Pay rent", dueDate: today, completed: true });
todos.add({ title: "Service Vehicle", dueDate: today, completed: false });
todos.add({ title: "File taxes", dueDate: tmrow, completed: false });
todos.add({ title: "Pay electric bill", dueDate: tmrow, completed: false });
module.exports = todoList;
