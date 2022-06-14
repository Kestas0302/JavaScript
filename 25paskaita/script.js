console.log("25 paskaita");
console.log(" ");


const renderTodo = (todo) => {
    console.log(todo);
    const {completed, title} = todo;
    // const id = todo.id;
    // const completed = todo.completed;
    // const title = todo.title;

    const todoEl = document.createElement('div');
    const todoTitle = document.createElement('p');
    const todoStatus = document.createElement('span');
    
    todoEl.className = "todo";
    todoTitle.className = "todo-title";
    todoStatus.className = completed ? "todo-status done" : "todo-status";

    todoTitle.textContent = title;
    
todoEl.append(todoTitle, todoStatus);
document.querySelector(".todo-container").prepend(todoEl);

};

fetch("https://jsonplaceholder.typicode.com/todos")
.then(resp => resp.json())
.then((responce) => {
    const todos = responce.slice(0, 5);

    // renderTodo(todos[0]);
    todos.forEach(todo => renderTodo(todo));
})
.catch((error) => {
    console.error(error);
});

const handleAddTodo = () => {
    const todoText = document.querySelector('input[name="todo-text"]');
    // console.log(todoText.value);
    // console.log("Paspaudziau add mygtuka");
    const newTodo = {title: todoText.value, completed: false};

    const params = {
        method: "POST",
        body: JSON.stringify(newTodo),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    };


fetch("https://jsonplaceholder.typicode.com/todos", params)
    .then(resp => resp.json())
    .then(responce =>{
     renderTodo(responce);
     todoText.value = "";
     console.log(responce)
    })
.catch((error) => {
    console.error(error);
});
    // renderTodo(newTodo);
    // todoText.value = "";
};

const addButton = document.querySelector(".add-button");
addButton.addEventListener("click", handleAddTodo);

// const handleAddTodo = (e) => {
//     const todoText = document.querySelector('input[name="todo-text"]');
//     console.log(todoText);
//     console.log("Paspaudziau add mygtuka");
// }
// Sukurti addEventListener su handlerliu onClick

// Nuspaudus ant elemento pakeisti todoStatus klasę (jeigu klasė yra done, pakeisti į undone. Jeigu klasė yra undone, pakeisti į done)

// Pakeisti todo status į priešinga, kaip su klase. jeigu buvo todo.completed = true, pakeisti i todo.completed = false;

// Pakeisti teksto sviesuma/tamsuma kai yra done/undone

// Follow dizaina, datas: menesis, diena, metai