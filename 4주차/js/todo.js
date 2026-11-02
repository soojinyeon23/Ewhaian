const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function savedToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    savedToDos();
    //keep todo id that is not matched with li id
    //근데 작동안함! 왜? type 때문에! li.id는 string이여서 안 됐던거임
    //그래서 parseInt하면 됨!
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText=newTodo.text;
    const button = document.createElement("button");
    button.innerText="X";
    button.addEventListener("click", deleteTodo)
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);

}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    savedToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);


const getSavedToDos = localStorage.getItem(TODOS_KEY);

if (getSavedToDos !== null) {
    const parsedToDos = JSON.parse(getSavedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo); 
}