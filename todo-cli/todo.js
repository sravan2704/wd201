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
module.exports = todoList;
