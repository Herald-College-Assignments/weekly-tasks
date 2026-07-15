document.getElementById("todoForm").addEventListener("submit", addItem);

function addItem(event){
    event.preventDefault()

    const newItem = document.getElementById("item")
    if (newItem.value.trim() === "") return;

    const listItem = document.createElement("li")
    const spanItem = document.createElement("span")
    spanItem.textContent = newItem.value.trim()

    const editBtn = document.createElement("button")
    editBtn.textContent = "Edit"
    editBtn.onclick = () => {
        const newText = prompt("Edit your task", spanItem.textContent)
        if (newText !== null && newText.trim() !=="") {
            spanItem.textContent = newText
        }
    }

    const deleteBtn = document.createElement("button")
    deleteBtn.textContent = "Del"
    deleteBtn.addEventListener("click", () => {
        const userConfirm = confirm(`Do you want to delete item '${spanItem.textContent}'?`)
        if (!userConfirm) return;
        listItem.remove()
    })

    const taskList = document.getElementById("taskList")
    taskList.appendChild(listItem)
    listItem.appendChild(spanItem)
    listItem.appendChild(editBtn)
    listItem.appendChild(deleteBtn)
    newItem.value = ""
}