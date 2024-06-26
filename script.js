var StoredTodoString = localStorage.getItem("todos");
//Get the stored todos string from local storage

var todosArray = JSON.parse(StoredTodoString) || [];

renderTodoList();

function renderTodoList() {
    document.getElementById('list').innerHTML = '';
    if (todosArray.length > 0) {
        todosArray.forEach((curr_task, index) => {
            addToList(index, curr_task);
        });
    }
}


document.getElementById("submit").addEventListener('click',
    function (event) {
        event.preventDefault();

        const new_task = document.getElementById("task").value.trim();

        if (new_task) {
            todosArray.push({task: new_task, is_marked_done: false});
            console.log(todosArray);
            localStorage.setItem('todos', JSON.stringify(todosArray));
            renderTodoList();
            document.getElementById('task').value = '';
        }
    }
);


function addToList(index, new_task) {
    const li = document.createElement('li');
    li.textContent = new_task.task;
    if(new_task.is_marked_done === true){
        li.style.textDecoration='line-through';
        li.style.color='gray';
    }
    const done = document.createElement('button');
    done.className = 'mark_as_done';
    done.textContent = '✔';

    done.setAttribute('onclick',
        `if (todosArray[${index}].is_marked_done === false) {
            todosArray[${index}].is_marked_done = true;
            event.stopPropagation();
            this.parentNode.style.textDecoration = 'line-through';
            this.parentNode.style.color = 'gray';
        }
        else{
            todosArray[${index}].is_marked_done = false;
            event.stopPropagation();
            this.parentNode.style.textDecoration = 'none';
            this.parentNode.style.color = 'rgb(139, 131, 255)';
        }
        localStorage.setItem('todos', JSON.stringify(todosArray));
        renderTodoList();` 
    );

    const dlt = document.createElement('button');
    dlt.className = 'delete';
    dlt.textContent = '✘';
    dlt.setAttribute('onclick', `deleteTask(${index})`);

    li.appendChild(done);
    li.appendChild(dlt);

    document.getElementById('list').appendChild(li);
    //add new li to ul
}

function deleteTask(taskIndex) {
    todosArray.splice(taskIndex, 1);
    localStorage.setItem('todos', JSON.stringify(todosArray));
    renderTodoList();
}