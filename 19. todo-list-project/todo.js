const item = document.querySelector("#input-task")
const toDoBox = document.querySelector("#to-do-box");
const noListFound = document.querySelector("#no-data");
let count = 0


item.addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        noListFound.style.display = "none"
        addToDo(event.target.value)
        event.target.value = "";
        count++
    }
}
)

const addToDo = (item) => {
    // for creating the list of todos
    let listItem = null;
    listItem = document.createElement("li");
    listItem.setAttribute("class", "todo-data")
    listItem.innerHTML = `
        ${item}
        <button class="delete">X</button>
    `;

    toDoBox.appendChild(listItem)


    // for checking the done todo lists
    listItem.addEventListener(
        "click",
        function () {
            listItem.style.textDecoration = "line-through"
        }
    )

    // for removing or deleting the done todo lists
    listItem.querySelector("button").addEventListener(
        "click",
        function () {
            confirm(
                "Are you sure to delete!!",
                listItem.remove()
            )
            count--;
            if (count === 0) {
                noListFound.style.display = "block"

            }
        }
    )
}