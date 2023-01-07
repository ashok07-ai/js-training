// Loops in Javascript
// 1. For Loop (loops a block of code number of times)
// 2. For In Loop(loops through the keys of an object)
// 2. For Of Loop(loops through the values of an object)
// 2. While Loop(loops a block based on specific condition)
// 2.Do While Loop(loop runs at once)

// Syntax: for(statement1; statement2; statement3)

// Examples of For loop
// 1. Print the first 10 numbers
for (let i = 0; i <= 10; i++) {
    console.log(i)
}

let x = 0;
for (; x < 10;) {
    console.log(x);
    x++;
}

// 2. Print sum of n natural numbers
let sum = 0;
let input_number = prompt("Enter the number");
for (let i = 1; i <= input_number; i++) {
    sum += i;
}
console.log("Sum of first " + input_number + " is: " + sum)

// 3. Print the factroial of a number
let fact_sum = 1;
let fact_input_number = prompt("Enter the number");
for (let i = 1; i <= fact_input_number; i++) {
    fact_sum *= i;
}
console.log("Factorial of " + fact_input_number + " is: " + fact_sum);

// 4. Print the fibonacci series
let a = 0;
let c = 1;
let nextTerm;
let fibo_input_number = prompt("Enter the number");
for (let i = 1; i <= fibo_input_number; i++) {
    console.log(a)
    nextTerm = a + c;
    a = c;
    b = nextTerm;
}

// For In Loop
// Syntax: for(key in object)

// 1. Example of for in loop
let obj = {
    John: 80,
    Jane: 45,
    Mike: 40,
    Sam: 55
}

for (let a in obj) {
    console.log("Marks of " + a + " is: " + obj[a])
}

// // 2. Example
let person_obj = {
    fname: "Dell",
    address: "dummy, abc-street",
    age: 21,
}

let text = ""

for (b in person_obj) {
    text += person_obj[b] + " ";
}
console.log(text)


// For of Loop
//  Syntax: for(key of iterable)

for (x of "strange") {
    console.log(x)
}

// while Loop
// Syntax: while(condition){}
let input_number_one = prompt("Enter the number");
let i = 0
while (i < input_number_one) {
    console.log(i)
    i++
}

// do while Loop
// Syntax: do(condition){}while();
let input_number_two = prompt("Enter the number");
let b = 0
do {
    console.log(b);
    b++;
} while (b < input_number_two);

