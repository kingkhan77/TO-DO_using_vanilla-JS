import { todoRepository } from './TodoRepository/repository.js';

const today = new Date();

// Extract day, month, and year
const date = today.getDate();
const monthIndex = today.getMonth();
const year = today.getFullYear();
const dayIndex = today.getDay();

function getMonthName(monthIndex) {
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    return monthNames[monthIndex].toUpperCase();
}

// Function to get the day of the week name
function getDayName(dayIndex) {
    const dayNames = [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];
    return dayNames[dayIndex].toUpperCase();
}

document.getElementById('date').textContent = date;
document.getElementById('month').textContent = getMonthName(monthIndex);
document.getElementById('year').textContent = year;
document.getElementById('day').textContent = getDayName(dayIndex);

todoRepository.renderTodoList();

document.getElementById("submit").addEventListener('click',
    function (event) {
        event.preventDefault();
        const new_task = document.getElementById("task").value.trim();

        if (new_task) {
            todoRepository.addTask(new_task); 
        }

    }
);

// window.handleTaskDone =function(taskId){
//     todoRepository.handleTaskDone(taskId);
// }; 

// window.deleteTask = function (id) {
//     todoRepository.deleteTask(id);
// };

// function handleTaskDone(index) {
//     const li = document.querySelectorAll('li')[index];

//     if (todosArray[index].is_marked_done === false) {
//         todosArray[index].is_marked_done = true;
//         li.style.textDecoration = 'line-through';
//         li.style.color = 'gray';
//     }
//     else {
//         todosArray[index].is_marked_done = false;
//         li.style.textDecoration = 'none';
//         li.style.color = 'rgb(139, 131, 255)';
//     }
//     localStorage.setItem('todos', JSON.stringify(todosArray));
//     renderTodoList();
// }

// addToList(taskId, currTask);

// function addToList(index, new_task) {
//     const li = document.createElement('li');
//     li.textContent = new_task.task;

//     li.className = "ml-[-30px] text-left p-[10px] bg-white text-[5.5mm] font-sans w-[auto] h-[auto] rounded-[10px] mb-[40px] flex flex-wrap hover:no-underline relative shadow-custom bg-slate-50";

//     if (new_task.is_marked_done === true) {
//         li.style.textDecoration = 'line-through';
//         li.style.color = 'gray';
//     }
//     const done = document.createElement('button');
//     done.className = "mark_as_done mt-0 ml-[20px] w-[7.5mm] h-[7.5mm] border-[1px] border-[#47C5DC] bg-white rounded-[5px] text-[3.7mm] text-[#47C5DC] absolute right-[60px] hover:text-green-700 hover:border-2 hover:border-blue-400 ";
//     done.textContent = '✔';

//     done.setAttribute('onclick', `handleTaskDone(${index})`);

//     const dlt = document.createElement('button');
//     dlt.className = "delete mt-0 ml-[20px] w-[7.5mm] h-[7.5mm] border-[1px] border-[#47C5DC] bg-white rounded-[5px]  text-[3.7mm] font-bold absolute right-[15px] hover:text-red-700 hover:border-2 hover:border-blue-400";
//     dlt.textContent = '✘';
//     dlt.setAttribute('onclick', `deleteTask(${index})`);

//     li.appendChild(done);
//     li.appendChild(dlt);

//     document.getElementById('list').appendChild(li);
//     //add new li to ul
// }

// function deleteTask(taskIndex) {
//     todosArray.splice(taskIndex, 1);
//     localStorage.setItem('todos', JSON.stringify(todosArray));
//     renderTodoList();
// }