// Constructor
// Constructor is a function that is automatically invoked when an object is created

function Person(firstName, lastName, age, eye) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.personAge = age;
    this.eyeColor = eye;
    this.fullName = function () {
        return this.firstName + " " + this.lastName
    }
}
const person1 = new Person("john", "Doe", 35, "Black")
const person2 = new Person("ask", "sam", 40, "Blue")
person2.religion = "Hindu"

document.write("My name is: " + person1.fullName() + "<br>");
document.write("My name is: " + person2.fullName());
console.log(person1, person2)



class Rectangle {
    constructor(length, breadth) {
        this.length = length;
        this.breadth = breadth;
    }

    calculateArea() {
        let area = this.length * this.breadth;
        document.write(`The area of rectangle is: ${area} <br>`)
    }
}

let length_value = prompt("Enter value of length: ")
let breadth_value = prompt("Enter value of breadth: ")
const rect1 = new Rectangle(5, 100);
const rect2 = new Rectangle(length_value, breadth_value);
rect1.calculateArea();
rect2.calculateArea();