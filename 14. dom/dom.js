// Document Object Model (DOM)
// DOM represents a document with a logical tree
// document.body => page body as js object
// document.body.style.background = "black" => changes page background to green

// There can be three main types of nodes in DOM tree
// 1. Text Nodes
// 2. Element Nodes
// 3. Comment Nodes

console.log(document.body)

function redColor() {
    document.body.style.background = "red";
    document.body.style.color = "white";
}

function greenColor() {
    document.body.style.background = "green";
    document.body.style.color = "white"
}

function yellowColor() {
    document.body.style.background = "yellow";
    document.body.style.color = "black"

}

// Alert Example
alert("Hello world");

// Prompt Example
prompt("Enter your name");

// Confirm Example
confirm("Do you want to delete?")



// Browser Object Model (BOM)
// The Browser Object Model (BOM) represents additional objects provided by the browser (host environment)
// Example: location.href = "https://www.google.com" => (Redirected to the google url)