// class Animal {
//     constructor(name, color) {
//         this.animalName = name;
//         this.animalColor = color;
//     }

//     run() {
//         console.log(this.animalName + " is Running");
//     }

//     shout() {
//         console.log(this.animalName + " is Shouting")
//     }
// }

// class Monkey extends Animal {
//     eatBanana() {
//         console.log(this.animalName + " is eating banana");
//     }

//     color() {
//         console.log("The color of " + this.animalName + " is " + this.animalColor)
//     }
// }

// let a1 = new Animal("Dog", "Black");
// let a2 = new Animal("Tiger", "Brown");
// let a3 = new Monkey("Monkey", "White")
// a1.run();
// a2.shout();
// a3.eatBanana();
// a3.color()


// // // Calculate area and preimeter of rectangle
// // class Rectangle {
// //     constructor(length, breadth) {
// //         this.rectLength = length;
// //         this.rectBreadth = breadth;
// //     }
// // }

// // class RectArea extends Rectangle {
// //     calculateArea() {
// //         let result = this.rectLength * this.rectBreadth;
// //         console.log("The area of rectangle is: " + result)
// //     }
// // }

// // class PerimeterRectangle extends Rectangle {
// //     calculatePerimeter() {

// //         let result = (2 * parseInt(this.rectLength + this.rectBreadth));
// //         console.log("The permieter of rectangle is: " + result)
// //     }
// // }

// // let area = new RectArea(10, 12);
// // let perimeter = new PerimeterRectangle(10, 12);
// // area.calculateArea();
// // perimeter.calculatePerimeter();


// // Example of Super Keyword in Inheritance
// // super = Refrence to a parent class (super class);
// //         Very similar to "this" keyword
// //         Can use super classes: Constructor, methods

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     hello() {
//         console.log("My name is:", this.name);
//         console.log("My age is:", this.age);
//     }
// }

// class Student extends Person {
//     constructor(name, age, gpa) {
//         super(name, age);
//         this.gpa = gpa;
//     }

//     stdHello() {
//         super.hello();
//         console.log("My gpa is:", this.gpa)
//     }
// }

// class Teacher extends Person {
//     constructor(name, age, className) {
//         super(name, age)
//         this.className = className
//     }

//     techHello() {
//         super.hello();
//         console.log("My class is: ", this.className)
//     }
// }

// const stu1 = new Student("stu1", 21, 3.2);
// const tech1 = new Teacher("tech1", 40, 11);
// console.log("The student name is: ", stu1.name);
// console.log("The student age is: ", stu1.age);
// console.log("The student gpa is: ", stu1.gpa);

// console.log("The teacher name is: ", tech1.name);
// console.log("The teacher age is: ", tech1.age);
// console.log("The teacher gpa is: ", tech1.className);
// console.log("---------------")
// stu1.stdHello();
// tech1.techHello();



// Getters and setters
class Fruits {
    constructor(name) {
        this.name = name;
    }

    get fruitName() {
        return this.name;
    }

    set fruitName(newName) {
        this.name = newName;
    }
}


let fruit1 = new Fruits("Apple");
fruit1.name = "Banana"
console.log(fruit1.fruitName)

// Instance of 
console.log(fruit1 instanceof Fruits)


// Example1 of Inheritance
// Create a class Account with data members acc no, balance, and min_balance.
// Include method for displaying values of objects.
// Define member function to display min_balance.
// Create array of objects to store data of 5 accounts and read and display values of each object

class Account {
    constructor(acc_no, balance, min_balance) {
        this.acc_no = acc_no;
        this.balance = balance;
        this.min_balance = min_balance
    }

    display() {
        console.log(`The account number is: ${this.acc_no}`);
        console.log(`The balance is: ${this.balance}`);
        console.log(`The min balance is: ${this.min_balance}`);
    }

    displayMinBalance() {
        console.log(`The minimum balance is: ${this.min_balance}`);
    }
}


const datas_of_objects = [
    new Account(1122332122, 20000, 1000),
    new Account(1122332123, 90000, 2000),
    new Account(11223321223, 70000, 3000),
    new Account(11223321223, 50000, 4000),
]

datas_of_objects.forEach((details) => {
    details.display();
})
console.log("-----------------")
datas_of_objects.forEach((details) => {
    details.displayMinBalance();
})


// Example2 of Inheritance
// Create a class Teacher with data members tid and subject.
// Create another class Staff with data members sid and position and derive it with Teacher Class.
// Derive a class Coordinator from Staff and the class must have its own data member department and member functions for displaying data members.
// Create two object of Coordinator class and read and display their details;

class Teacher {
    constructor(tid, subject) {
        this.tid = tid;
        this.subject = subject
    }
}

class Staff extends Teacher {
    constructor(tid, subject, sid, position) {
        super(tid, subject)
        this.sid = sid;
        this.position = position
    }
}

class Coordinator extends Staff {
    constructor(tid, subject, sid, position, department) {
        super(tid, subject, sid, position);
        this.department = department;
    }

    displayCoordinatorDetails() {
        console.log(`The Coordinator id is: ${this.tid}-${this.sid}`);
        console.log(`The subject is: ${this.subject}`);
        console.log(`The position is is: ${this.position}`);
        console.log(`The department is: ${this.department}`);
    }
}

let staff1 = new Coordinator(1, "Javascript", 2, "seniorDev", "CSE")
let staff2 = new Coordinator(445, "C++", 556, "jrDev", "IT");
staff1.displayCoordinatorDetails();
staff2.displayCoordinatorDetails();