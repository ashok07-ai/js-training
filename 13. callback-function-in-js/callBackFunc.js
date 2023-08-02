// 1. Callback
// A callback is a function passed into another function as an argument

// 2. Synchronous action
// A synchronous actions are the action that initiate and finish one-by-one

// 3. Asynchronous action
// Asynchronous actions are the actions that we initiate now and they finish it later (eg. setTimeout)

// Example of Synchronous Action
let firstName = prompt("Enter first name: ")
let age = prompt("Enter age: ")
console.log(`The name is: ${firstName} and age is ${age}`)

// Example of Asynchronous Action
console.log("Start")
setTimeout(function () {
    console.log("Processing-----")
}, 5000);
console.log("End")

// 1. Example of callback

function display(message) {
    console.log(message)
}

function firstFunc() {
    display("Hello");
}

function secondFunc() {
    display("Bye")
}

firstFunc();
secondFunc();

// 2. Example of callback
function displayResult(res) {
    console.log(res);
}

function caluclation(num1, num2, myCallBackFunction) {
    let sum = num1 + num2;
    myCallBackFunction(sum);
}

caluclation(20, 40, displayResult)


// Assignment of addition, subttraction, multiplication

// addition
function addition(num1, num2, callBack) {
    const result = num1 + num2;
    callBack(result)
}

// subtraction
function subtraction(num1, num2, callBack) {
    const result = num1 - num2;
    callBack(result)
}

// multiplication
function multiplication(num1, num2, callBack) {
    const result = num1 * num2;
    callBack(result)
}

// display result
function displayResult(result) {
    console.log(result)
}

let a = parseInt(prompt("Enter first number"));
let b = parseInt(prompt("Enter second number"));
addition(a, b, displayResult)
subtraction(a, b, displayResult)
multiplication(a, b, displayResult)