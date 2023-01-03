// Array Methods
// 1. Push Method (Add the element in last index of array)
const avengers = ["captAmerica", "thor", "ironMan", "hulk", "drStrange"];
avengers.push("batMan", "spiderMan")
// returns the new array length
let pushed_element = avengers.push("batMan", "spiderMan")
console.log(avengers, pushed_element);



// 2. Pop Method (Remove the element from the last index of array)
avengers.pop();
// returns a value that is popped out
const popped_element = avengers.pop()
console.log(avengers, popped_element)



// 3. toString (Converts an array to string)
const converted_array = avengers.toString();
console.log(converted_array)


// 4. Join (Join all the elements of array using a separator)
const joined_array = avengers.join("-");
console.log(joined_array);

// 5. Shift (Remove the first element from array and return it)
avengers.shift();
console.log(avengers)

// 6. Unshift (Add the element at the start of the array)
avengers.unshift("av1", "av2");
console.log(avengers)

// 7. Delete (Delete the element from the array, NOTE: Use Pop or Shift insted of delete)
delete avengers[2];
console.log(avengers)

// 8. Concat (Use to combine two or more than two arrays)
const arr1 = [1, 2, 3, 4, 5];
const arra2 = [10, 12, 14, 34];
const combined_array = arr1.concat(arra2);
console.log(combined_array)

// let arr3 = [7, 8, 9];
// let arr4 = [1, 2, 3];
// let arr5 = [4, 5, 6];
// let combined_result_one = arr4.concat(arr5, arr3);
// // let combined_result_two = combined_result_one.concat(arr3);
// console.log(combined_result_one)


// 9. Splice (Add new items to array)
// Splice method contain three paramentrs
// First Parameter defines position where to add new elements
// Second Parameter defines how many elements to be removed
// Third Parameter defines the new element to be added
const brands = ["apple", "del", "lenovo", "samsung", "acer"];
brands.splice(1, 3, "hp", "asus");
console.log(brands)

// 10. Slice (slice out the element of the array)
const bike_brands = ["honda", "suzuki", "bmw", "harleyDavidson", "ducati"];
const new_bike_brands = bike_brands.slice(2, 4)
// last element is not counted
console.log(new_bike_brands)

// 11. Reverse(arrange the elements of array in reverse order)
bike_brands.reverse();
console.log(bike_brands)

// 12. Sort (Sort the elements of array in ascending and descending order)
const numbers_details = [6, 7, 1, 2, 3, 9, 6, 5];
console.log(numbers_details.sort(compareFunction))

const compareFunction = (a, b) => {
    return a - b
}
const numbers_details_one = [11, 44, 22, 546, 324];
console.log(numbers_details_one.sort(compareFunction))

