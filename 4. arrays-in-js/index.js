// Creating an array
// array_name = [item1, item2, item3, ...]
// Arrays are mutable and can be changed
const bikes = ["Honda", "BMW", "Ducati", "Suzuki"];
const bikes_list = [
    "Honda",
    "BMW",
    "Ducati",
    "Suzuki"
]

const bike_list_one = [];
bike_list_one[0] = "Honda";
bike_list_one[1] = "BMW";
bike_list_one[2] = "Ducati";
bike_list_one[3] = "Suzuki"
console.log(bikes);


// Using the new Keyword
const bikes_collection = new Array("Honda", "BMW", "Ducati", "Suzuki");

// Accessing the array elements
console.log(bikes_collection[0])

// Accessing the last element of array
console.log(bikes_collection[bikes_collection.length - 1])

// Adding the new value to the array
bikes_collection[4] = "HD"
console.log(bikes_collection)

const today_date = new Date();
console.log(typeof (today_date))

// Changing the index of array elements
bikes_collection[1] = "Ducati";
bikes_collection[2] = "BMW";
console.log(bikes_collection)

// To check whether it is array or not
console.log(Array.isArray(bikes_collection))

// List of Javascript Methods
// 1. Pop()
// 2. Shift()
// 2. Push()
// 3. unshift()
// 4. delete()
// 5. concat()
// 6. slice() (method to add new element in array (in range))
// 7. splice() (method to remove the element in array(in range))
// 8. toString()
// 9. sort()
