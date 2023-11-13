function removeTask(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

document.getElementById("add").addEventListener("click", function() {
    var task = document.getElementById("task").value;
    var date = document.getElementById("task-date").value;
    var time = document.getElementById("task-time").value;
    var priority = document.getElementById("task-priority").value;

    var table = priority === "important" ? document.getElementById("important-task-list") : document.getElementById("casual-task-list");
    var row = table.insertRow(-1);

    var cellDate = row.insertCell(0);
    var cellTime = row.insertCell(1);
    var cellTask = row.insertCell(2);
    var cellPriority = row.insertCell(3);
    var cellRemove = row.insertCell(4);

    cellDate.innerHTML = date;
    cellTime.innerHTML = time;
    cellTask.innerHTML = task;
    cellPriority.innerHTML = priority;
    cellRemove.innerHTML = '<button onclick="removeTask(this)">Remove</button>';

    document.getElementById("task").value = "";
    document.getElementById("task-date").value = "";
    document.getElementById("task-time").value = "";
});
