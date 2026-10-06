const button = document.getElementById('addTask')
const taskInput = document.getElementById('taskInput')
const dateInput = document.getElementById('dateInput')
const list = document.getElementById('list')
let taskList = []

function taskInList() {
    list.innerHTML = ''

    taskList.forEach(function (task, index){
        const li = document.createElement('li')
        li.textContent = task + ' '

        const taskcomplete = document.createElement('input')
        taskcomplete.type = 'checkbox'

        const del = document.createElement('button')
        del.textContent = 'X'
        del.addEventListener('click', function() {
            taskList.splice(index, 1)
            taskInList()
        })

        list.appendChild(taskcomplete)
        list.appendChild(li)
        li.appendChild(del)
    })
}

function addTask() {
    const task = taskInput.value + ' ' + dateInput.value
    taskList.push(task)
    taskInput.value = ''
    taskInList()
}

button.addEventListener('click', addTask)
