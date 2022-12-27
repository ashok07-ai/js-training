// Conditional Statement is used to display output on various condition or constriants
// Types of Conditional Statement (if-else, if-else if-else, switch)

// If Conditional Statement
let person_age = 50;
if (person_age >= 40) {
    console.log("Old")
} else {
    console.log("Adult")
}

let input_number = 51
if (input_number % 2 === 0) {
    console.log("Even")
} else {
    console.log("Odd")
}

let firstNumber = 50;
let secondNumber = 50;
if (firstNumber === secondNumber) {
    console.log("Equal");
} else {
    if (firstNumber > secondNumber) {
        console.log("FirstNumber is Greater")
    } else {
        console.log("FirstNumber is Less")
    }
}


// If-Elseif Condition Statements
let initialNumber = 50;
let finalNumber = 50
if (initialNumber === finalNumber) {
    console.log("Equal");
} else if (initialNumber > finalNumber) {
    console.log("InitialNumber is Greater")
} else {
    console.log("InitialNumber is Less")
}


// Switch Case Example

// For no of day
let no_of_day = (new Date).getDay();
console.log(no_of_day)

let operator = '//';
let a = 10;
let b = 20;
switch (operator) {
    case '+':
        console.log(a + b);
        break;

    case '-':
        console.log(a - b);
        break;
    case '*':

        console.log(a * b);
        break;

    case '/':
        console.log(a / b);
        break;

    default:
        console.log("Invalid Input");
}