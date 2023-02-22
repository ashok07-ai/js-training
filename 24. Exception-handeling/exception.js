// Exception handeling is the process of responding to unwanted events when a computer program runs;
// Try,Catch syntax helps to hanle exceptions in programs
// Types of Error: Syntax Error, Logical Error, Runtime Error;
// Syntax Error
// eg. document.getelementbyid(#something)
//  Logical Error
// eg. add of a and b is (a-b);
//  Runtime Error
// e.g addFunction();
// Try,catch method works synchronously

console.log("First");
console.log("second");

try {
    console.log(Third);

} catch (e) {
    console.log("Something went wrong" + e)
}
console.log("Fourth");
console.log("Fifth");




// Try catch method in settimeout function

setTimeout(() => {
    try {
        someFunction();

    } catch (error) {
        console.log("Something went wrong" + error)
    }
}, 1000)
