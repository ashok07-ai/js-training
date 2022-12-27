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


// 1. Type Checking in Switch Case
let assumed_number = "2";
switch (assumed_number) {
    case 1:
        console.log(1);
        break;
    case "1":
        console.log("One");
        break;
    case 2:
        console.log(2);
        break;
    case "2":
        console.log("Two");
        break;
    default:
        console.log("Invalid Type");
}

// 2. Switch With Multiple Case
let fruit_details = "Mango";
switch (fruit_details) {
    case "Apple":
    case "Mango":
    case "Banana":
    case "Pineapple":
        console.log(`${fruit_details} is a fruit`);
        break;
    default:
        console.log(`${fruit_details} is not a fruit`)
        break;
}
