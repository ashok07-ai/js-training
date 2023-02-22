const details = document.querySelector("#details");
const list_of_details = document.querySelector("#list-of-entered-details");
let data = []

details.addEventListener("keyup", function (event) {
    let enteredData = event.target.value;
    if (event.key === "Enter" && event.target.value != "") {
        detailFunction(enteredData)
        event.target.value = "";
    }
})

const detailFunction = (infos) => {
    let items = document.createElement("li");
    items.setAttribute("class", "info-details");
    items.innerHTML = `
        <h5> ${infos} <h5>
    `
    list_of_details.append(items)

    // for storing localstorage
    data.push(infos);
    console.log(data)
    localStorage.setItem("save-details", JSON.stringify(data));
}

window.onload = () => {
    let savedListData = JSON.parse(localStorage.getItem("save-details"));
    savedListData.forEach(savedDatas => {
        detailFunction(savedDatas)
    });
}