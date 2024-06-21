document.addEventListener('DOMContentLoaded', ()=>{
    const taskInput = document.getElementById("taskInput")
    const addTaskButton = document.getElementById("addTaskButton")
    const taskList = document.getElementById("taskList")

    addTaskButton.addEventListener('click', addTask)
    taskInput.addEventListener('keypress',(e)=>{
        if(e.key === "Enter"){
            addTask()
        }
    })

    function addTask(){
        const taskText = taskInput.value.trim();
        if(taskText === ''){
            alert("გთხოვთ შეავსეთ ველი")
            return;
        }

        const listItem = document.createElement("li")
        listItem.textContent = taskText;

        const removeButton = document.createElement("button")
        removeButton.textContent = "Remove"
        removeButton.classList.add("remove")
        removeButton.addEventListener("click", ()=>{
            taskList.removeChild(listItem)
        })

        taskList.appendChild(listItem)
        listItem.appendChild(removeButton)

        taskInput.value = ""
    }
})