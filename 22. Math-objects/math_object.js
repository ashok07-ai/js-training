// Calculating Modulus
// (mod 4) convert to DEC0;
// A-A/B*B


// Javascript math object allows us to perform mathematical tasks
// Math Properties
console.log("Returns Euler's number:", Math.E);
console.log("Returns Value of PI: ", Math.PI);
console.log("Returns square root of 2: ", Math.SQRT2)
console.log("Returns square root of 4: ", Math.sqrt(4))

// Math Objects
// 1. Math.round(x) ==> Returns x rounded to its nearest integer
let a = Math.round(4.6);
let b = Math.round(4.5);
let c = Math.round(4.4)
console.log(a, b, c);

// 2. Math.ceil(x) ==> Returns x rounded up to its nearest integer
let d = Math.ceil(4.1);
let e = Math.ceil(4.5);
let f = Math.ceil(-7.4);
console.log(d, e, f)

// 3. Math.floor(x) ==> Returns x rounded down to its nearest integer
let g = Math.floor(4.1);
let h = Math.floor(8.2);
let i = Math.floor(-6.4);
console.log(g, h, i)

// 4. Math.trunc(x) ==> Returns the integer part of x
let j = Math.trunc(4.9);
let k = Math.trunc(-1.4);
let l = Math.trunc(-4.20998);
console.log(j, k, l)

// 5. Math.sign(x) ==> returns if x is negative, null or positive
let m = Math.sign(-4);
let n = Math.sign(0);
let o = Math.sign(4);
console.log(m, n, o);

// 6. Math.pow(x,y)
let p = Math.pow(2, 8);
let q = Math.pow(4, 2);
console.log(p, q)

// 7. Math.min() and Math.max()
let num1 = Math.min(12, 77, 4, 12, 3, 5, 7, 8, -100);
console.log(num1)

let num2 = Math.max(12, 77, 4, 12, 3, 5, 7, 8, -100);
console.log(num2)

// 8. Math.abs(x) ==> returns the absolute (positive) value of x
let r = -4.6;
console.log(Math.abs(r))

// 9. Math.random() ==> Returns a random number between 0(inclusive) and 1 (exclusive)
let random_number = Math.random()
console.log(random_number) 
