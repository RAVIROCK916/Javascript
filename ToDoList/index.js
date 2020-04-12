// selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

// event listeners
todoButton.addEventListener('click', addToDo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterToDo);

// functions
function addToDo(event) {
    // prevent form from submitting
    event.preventDefault();

    // todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // create li
    const newToDo = document.createElement('li');
    newToDo.innerText = todoInput.value;
    newToDo.classList.add('todo-item');
    todoDiv.appendChild(newToDo);

    // check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    // check trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    // append to list
    todoList.appendChild(todoDiv);

    //clear the todo input value
    todoInput.value = "";
}

function deleteCheck(event) {
    const item = event.target;
    const todo = item.parentElement;

    // delete todo
    if(item.classList[0] === 'trash-btn'){
        todo.classList.add("fall");
        todo.addEventListener('transitionend', () => {
            todo.remove();
        })
        
    }

    // check mark
    else if (item.classList[0] === 'complete-btn'){
        todo.classList.toggle("completed");
    }
}

function filterToDo(event) {
    const todos = todoList.childNodes;
    todos.forEach(todo => {
        switch(event.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if(todo.classList.contains("completed"))
                    todo.style.display = "flex";
                else
                    todo.style.display = "none";
                    break;
            case "uncompleted":
                if (!todo.classList.contains("completed"))
                    todo.style.display = "flex";
                else
                    todo.style.display = "none";
                    break;
        }
    });
}