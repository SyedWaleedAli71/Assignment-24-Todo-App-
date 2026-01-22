function addTodo() {
    var todo_item = document.getElementById("todo-item");

    if (todo_item.value.trim() === "") {
        alert("Please enter a valid todo");
        return;
    }

    var li = document.createElement("li");
    li.appendChild(document.createTextNode(todo_item.value));

    var delBtn = document.createElement("button");
    delBtn.innerText = "DELETE";
    delBtn.setAttribute("onclick", "deleteItem(this)");

    var editBtn = document.createElement("button");
    editBtn.innerText = "EDIT";
    editBtn.setAttribute("onclick", "editItem(this)");

    li.appendChild(delBtn);
    li.appendChild(editBtn);
    list.appendChild(li);

    saveData();
    todo_item.value = "";
}
// 
function editItem(b) {
    var oldValue = b.parentNode.firstChild.nodeValue;
    var editValue = prompt("Enter edit value", oldValue);

    if (editValue === null || editValue.trim() === "") {
        alert("Invalid edit value");
        return;
    }

    b.parentNode.firstChild.nodeValue = editValue;
    saveData();
}
//
function saveData() {
    localStorage.setItem("todos", list.innerHTML);
}
//
function loadData() {
    list.innerHTML = localStorage.getItem("todos");
}

loadData();

// 
function deleteItem(a) {
    a.parentNode.remove();
    saveData();
}

// 
function deleteAll() {
    list.innerHTML = "";
    localStorage.removeItem("todos");
}