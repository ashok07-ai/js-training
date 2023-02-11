// Event Listeners
// A JavaScript can be executed when an event occurs, like when a user clicks on an HTML element.
// Examples of HTML Events
// 1. When a user clicks the mouse
// 2. When a web page has loaded
// 3. When the mouse moves over an element

// element.addEventListener("click", function)

// EXAMPLE
// dblclick
const buttonTwo = document.querySelector('.btn-2');
function alertBtn() {
    alert("C++ is a programming language");
}

buttonTwo.addEventListener("dblclick", alertBtn)

// mouseover
const backgroundColor = document.querySelector(".box-3");
function changeBgColor() {
    backgroundColor.style.backgroundColor = "black";
}

backgroundColor.addEventListener("mouseover", changeBgColor)


// show Event (second-container-example)
const showButton = document.querySelector(".show-more-button");
const hiddenContent = document.querySelector(".hidden-content");
const textHeading = document.querySelector("#text-heading");

function eventFunction() {
    if (hiddenContent.classList.contains("show-more-button")) {
        hiddenContent.classList.remove("show-more-button");
        textHeading.innerText = "Show More"

    } else {
        hiddenContent.classList.add("show-more-button")
        textHeading.innerText = "Show Less"
    }
}

showButton.addEventListener("click", eventFunction)


// Image Example
const showImageButton = document.querySelector(".show-image");
const hideImageButton = document.querySelector(".hide-image");
const image_info = document.querySelector(".image-details");

function showImageFunction() {
    if (image_info.classList.contains("image-details")) {
        console.log("show")

        image_info.classList.remove("hide");
    }
}

showImageButton.addEventListener("click", showImageFunction)

function hideImageFunction() {
    console.log("hide")
    if (image_info.classList.contains("image-details")) {
        image_info.classList.add("hide");
    }
}

hideImageButton.addEventListener("click", hideImageFunction)



// Increment and Decrement 
const number_message = document.getElementById("total-count");
const increment = document.querySelector(".inc");
const decrement = document.querySelector(".dec");
const reset = document.querySelector(".reset");

// Initializing start value to 0
var initial_count = 0;

number_message.innerText = initial_count;

function incrementFunction() {
    initial_count++;
    number_message.innerText = initial_count;
}

function decrementFunction() {
    if (initial_count >= 1) {
        console.log(initial_count)
        initial_count--;
        number_message.innerText = initial_count
    } else {
        alert("Less than zero is not acceptable!!")
        number_message.innerText = 0
    }

}

function resetFunction() {
    initial_count = 0;
    number_message.innerText = initial_count
}

increment.addEventListener("click", incrementFunction);
decrement.addEventListener("click", decrementFunction);
reset.addEventListener("click", resetFunction)