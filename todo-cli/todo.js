const todoList = () =>{
    all=[];
    const add =(todoItem)=>{
        all.push(todoItem);
    };
    const markAsComplete = (index) =>{
        all[index].complete=true;
    };
    const overdue = () =>{
        const ovd=[]
        all.forEach((l) => {
            if (l.dueDate< today){
                ovd.push(l);
            }
        });
        return ovd;
    };
    const dueToday =() =>{
        const dt=[]
        all.forEach((l)=>{
            if(l.dueDate===today){
                dt.push(l);
            }
        });
        return dt;
    };
    const dueLater=()=>{
        const dl=[]
        all.forEach((l) =>{
            if (l.dueDate>today){
                dl.push(l);
            }
        });
        return dl;

    };
    const toDisplayableList = (list)=>{
        return list
            .map((j) =>{
                const ip=j.completed ? "[x]" : "[ ]";
                const d=j.dueDate==today ? "" : j.dueDate;
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

const formattedDate = d => {
  return d.toISOString().split("T")[0]
}

var dateToday = new Date()
const today = formattedDate(dateToday)
const yesterday = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() - 1))
)
const tomorrow = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() + 1))
)

todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false })
todos.add({ title: 'Pay rent', dueDate: today, completed: true })
todos.add({ title: 'Service Vehicle', dueDate: today, completed: false })
todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false })
todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false })

console.log("My Todo-list\n")

console.log("Overdue")
var overdues = todos.overdue()
var formattedOverdues = todos.toDisplayableList(overdues)
console.log(formattedOverdues)
console.log("\n")

console.log("Due Today")
let itemsDueToday = todos.dueToday()
let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday)
console.log(formattedItemsDueToday)
console.log("\n")

console.log("Due Later")
let itemsDueLater = todos.dueLater()
let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater)
console.log(formattedItemsDueLater)
console.log("\n\n")