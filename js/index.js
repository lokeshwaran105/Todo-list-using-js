function addTask(){
    var task = document.getElementById("task-input").value;
    
    var taskList = document.getElementsByClassName("task-item")[0];

    var item = document.createElement("li");

    var taskText = document.createElement("p").innerHTML = task;

    item.innerHTML = taskText + "<button class='btn' onclick='remTask(event)'>DELETE</button>";

    taskList.append(item);

}

function remTask(event) {
    event.target.parentElement.remove();
}