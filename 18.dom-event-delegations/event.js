// Event Delegation

// It allows user to append a SINGLE event listener to a parent element that adds it to all of its present and
// future descedants that match the selector

const football = document.querySelector("#football");
const basketball = document.querySelector("#basketball");
const tennis = document.querySelector("#tennis");
const message = document.querySelector("#message");
const sports = [];

function showSelectedMessage(e) {
    const selectedValue = e.target.id;
    sports.push(selectedValue)
    const target = e.target;
    target.style.backgroundColor = "lightGrey"
    target.style.color = "black";
    for (let i = 0; i <= sports.length; i++) {
        message.innerHTML = `${sports} is selected`
    }

    // or
    // message.innerHTML = ""
    // const data = sports.forEach((value) => {
    //     message.innerHTML += `${value},&nbsp;`
    // })
}

football.addEventListener("click", showSelectedMessage);
basketball.addEventListener("click", showSelectedMessage);
tennis.addEventListener("click", showSelectedMessage);

// or
// football.addEventListener("click", function showSelectedMessage(e) {
//     console.log(e.target.id)
// })

const subjectMessage = document.querySelector("#subjectMessage");
function subjectSelection(e) {
    const selectedValue = e.target.value;
    // subjectMessage.innerText = `${selectedValue} subject is selected`
    if (selectedValue === "c++") {
        subjectMessage.innerText = `C++ subject is selected`
    } else if (selectedValue === "ds") {
        subjectMessage.innerText = `Discrete Structure is selected`
    } else if (selectedValue === "maths") {
        subjectMessage.innerText = "Maths is selected"
    }
}