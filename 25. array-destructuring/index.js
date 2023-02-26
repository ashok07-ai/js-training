// Array destructuring
// Array destructuring is a javascript experssion that makes it possible to unpack values from arrays into different variables.

const js_languages = ["C", "C++", "Java", "Javascript", "Python"];

// accessing the values from ES5
let first_value = js_languages[0];
let second_value = js_languages[1];
let third_value = js_languages[2];
console.log("The first value is: ", first_value);
console.log("The second value is: ", second_value);
console.log("The third value is: ", third_value);

// accessing the values from ES6 array destructuring
let [first, second, third, fourth] = js_languages;
console.log("The first value is: ", first);
console.log("The second value is: ", second);
console.log("The third value is: ", third);
console.log("The fourth value is: ", fourth);

let [, , , , lastValue] = js_languages
console.log("The last value is", lastValue);



// Object Destructuring
// Object destructuring is a javascript experssion that makes it possible to unpack values from objects into different variables.

let details = {
    name: "Ashok",
    age: 24,
    rollNo: 7
}
console.log(`My Name is ${details.name}, age is ${details.age}, and rollNo is ${details.rollNo}`)

// using ES6 object destructuring concept
let { name, age, rollNo } = details
// let { name:firstName, age, rollNo } = details
console.log(`My Name is ${name}, age is ${age}, and rollNo is ${rollNo}`)
