
let input = prompt("What You Want To Do ?");
const todos = ['get up 6', 'workout upto 8', 'go for bath'];
while (input !== 'quit' && input !== "q") {

    if (input === "list") {
        console.log("*********************************")
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log("*********************************")
        input=prompt('list of all todos')
    }
    else if (input === "new") {
        const newtodo = prompt("Ok,, Add a new ToDo.");
        todos.push(newtodo);
        console.log(`${newtodo} is added to the list .`)
    }
    else if (input === "delete") {
        const index = parseInt(prompt(" oK,,Enter an index to delete !!"));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`Ok Deleted ${deleted[0]}`);
        }
        else {
            console.log('unknown index')
        }


    }
    input = prompt("What You Want To Do ?");
}
console.log("Ok . You quit the App. Good Bye!!")
