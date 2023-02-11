// Objects
const city = {
    id: 5545,
    name: "Butwal",
    zip_code: 32907,
    population: 600000,
    city_detail: function () {
        return this.name + ' ' + this.zip_code;
    }

}

console.log(city.city_detail())

// Method of creating an object

const person = new Object;
person.firstName = "John";
person.lastName = "Doe";
person.age = 24;

console.log(person)

// Array of objects

const person_details = [
    {
        firstName: "ABC",
        age: 25,
        address: "Butwal"
    },
    {
        firstName: "DEF",
        age: 30,
        address: "Kathmandu"
    },
    {
        firstName: "GHI",
        age: 70,
        address: "Pokhara"
    },
    {
        firstName: "KLM",
        age: 15,
        address: "Biratnagar"
    }
]

for (let i = 0; i < person_details.length; i++) {
    console.log(person_details[i])
    document.write("The name of person is: ", person_details[i].firstName + "<br>");
    document.write("The name of address is: ", person_details[i].address + "<br>");
    document.write("The name of age is: ", person_details[i].age + "<br>");
    document.write("<hr>")
}


// Dates in js

const today_date = new Date();
// Date Format (MM:dd:YY)
const other_date = new Date("6/12/2021 11:56")
console.log(other_date)

let day, date, minutes, time, month, hours;
day = other_date.getDay();
date = other_date.getDate();
minutes = other_date.getMinutes();
time = other_date.getTime();
month = other_date.getMonth();
hours = other_date.getHours();

console.log(day, date, minutes, time, month, hours)

other_date.setDate(18);
console.log(other_date)




var library = [
    {
        title: 'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254
    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264
    },
    {
        title: 'Brief of History of Time',
        author: 'Stephen Hawking',
        libraryID: 9871
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    }];

const sorted_library_id = library.sort((a, b) => {
    return (b.libraryID - a.libraryID)
});
console.log(sorted_library_id)