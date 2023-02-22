const item = document.querySelector("#input-task")
const toDoBox = document.querySelector("#to-do-box");
const noListFound = document.querySelector("#no-data");
let count = 1
const data = [];

item.addEventListener("keyup", function (event) {
    if (event.key == "Enter" && event.target.value != "") {
        noListFound.style.display = "none"
        addToDo(event.target.value);
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

    toDoBox.appendChild(listItem);
    data.push(item);
    localStorage.setItem("save-todo-datas", JSON.stringify(data));
    console.log(data)



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
            // let saveToDoDatas = []
            saveToDoDatas = JSON.parse(localStorage.removeItem("save-todo-datas"));

            saveToDoDatas.forEach((value, index) => {
                console.log("value: ", value, "and index is: ", index)
            })
            console.log("--", saveToDoDatas)
            // saveToDoDatas.pop()
            // localStorage.setItem("save-todo-datas", JSON.stringify(saveToDoDatas))

            count--;
            if (count === 0) {
                noListFound.style.display = "block"

            }
        }
    )
}

window.onload = () => {

    let savedListData = JSON.parse(localStorage.getItem("save-todo-datas"));
    savedListData.forEach(savedDatas => {
        addToDo(savedDatas)
    });

}