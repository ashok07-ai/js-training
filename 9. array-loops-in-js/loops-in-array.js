// Loops or Iterations in Arrays
// 1. forEach
// 2. map
// 3. filter
// 4. reduce
// 5. reduceRight
// 5. every
// 6. indexOf
// 7. lastIndexOf

// 1. forEach Method (calls a function once for each array element)
// forEach method takes 3 arguments (itemValue, index, array) - index and array arguments are optional

// 1. Example
const programming_lang_array = ["javascript", "solidity", "c", "c++"];
// programming_lang_array.forEach(function (value) {
//     console.log(value)
// })
const getArrayValues = (value, index) => {
    console.log(`The index is ${index} and value is ${value}`)
}
programming_lang_array.forEach(getArrayValues);

// 2. Example 
// Create an array. Add the value 100 to each items and update the value
const arr_numbers = [10, 40, 50, 60, 100];
const updateArray = (value, index, modifiedArray) => {
    console.log(modifiedArray[index] + 100)
}
arr_numbers.forEach(updateArray)

// 2. map method (creates a new array by performing some operations on each array element)
// map method takes 3 arguments (itemValue, index, array) - index and array arguments are optional
// map method creates a new array whereas foreach method perform operation on same array
// map returns an array

// Example

const arr_numbers_one = [23, 43, 12, 34];
let output = arr_numbers_one.map((value) => {
    return value * 2;
})
console.log(output)

// Example 2 (Multiply the array by its corresponding index and sort it in descending order)

let multipliedArray = arr_numbers_one.map((value, index) => {
    return value * index
})

sortedArray = multipliedArray.sort((a, b) => {
    return b - a
})

console.log(sortedArray)


// 3. Filter Method(creates a new array and print filter the elements that passes the condition)
// filter method takes 3 arguments (itemValue, index, array) - index and array arguments are optional
// filter returns an array

// 1. Example
const ages_array = [10, 45, 34, 24, 67];
let filtered_output = ages_array.filter((value) => {
    return value < 18;
})

console.log(filtered_output)

// 2 Example (Print the out of the movie name whose release date is greater than  2000)

const movie_details = [{
    movieName: "Captain America",
    releaseDate: 2001
},
{
    movieName: "Thor",
    releaseDate: 1997
},
{
    movieName: "Interstellar",
    releaseDate: 1991
},
{
    movieName: "Avatar",
    releaseDate: 2011
},
{
    movieName: "Joker",
    releaseDate: 2005
}]

let filtered_movie_details = movie_details.filter((value) => {
    return value.releaseDate > 2000;
});
console.log(filtered_movie_details)

filtered_movie_details.map((value) => {
    console.log(`The movie name is ${value.movieName} and its release date is ${value.releaseDate}`)
})


// 4. reduce method(Reduces an array to single value)
// reduce method takes 3 arguments (total,itemValue, index, arrayitself) - index and array arguments are optional
// reduce return a single value or single element
const numbers = [2, 4, 5, 7, 6, 5, 1];
const getTotal = (totalValue, itemValue) => {
    return totalValue + itemValue;
}
let totalNumber = numbers.reduce(getTotal);
console.log(totalNumber)


// 5. every() [ Every method checks if all array value passes the test]

const numbers_data = [12, 5, 3, 23, 7];
const numbers_to_check = numbers_data.every((value) => {
    return value >= 22
})
console.log(numbers_to_check);

// some() [Some method checks if one of the array value passes the test]
const numbers_to_check_some_value = numbers_data.some((value) => {
    return value >= 22
})
console.log(numbers_to_check_some_value)

// 6. indexOf() [IndexOf method searches the value in array in returns its position]
const name_details = ["Samsung", "Apple", "Blackberry", "Nokia", "Samsung"];
const results_name_details = name_details.indexOf("Samsung", 3);
console.log(results_name_details)

// 7. lastIndexOf() [lastIndexOf method searches the value from last position in array in returns its position]
const results_name_details_from_last = name_details.lastIndexOf("Samsung", 3)
console.log(results_name_details_from_last)

// 8. find() [find method returns the value of the first array element that passes a test function]
const find_numbers = [12, 45, 34, 23, 77]
const find_numbers_result = find_numbers.find((value) => {
    return value >= 23
})
console.log(find_numbers_result)


// Example: filter the numbers from array 
const filter_number = [10, 2000, undefined, 3500, undefined, 4000, 5400, undefined]
const filteredNumber = filter_number.filter((value) => {
    return value >= 4000 && !undefined;
})
console.log(filteredNumber);

filteredNumber.forEach((data) => {
    console.log("The filtered number is: ", data);
})

