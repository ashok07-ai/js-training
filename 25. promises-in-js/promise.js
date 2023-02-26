// Promises
// A promise is a "promise of code execution". The code either executes or fails, in both the
// cases the subscriber will be notified

// Syntax of a promise
// let promise = new Promise(function(resolve, reject){
//     // execute
// })

let p1 = new Promise((resolve, reject) => {
    console.log("Pending---")
    setTimeout(() => {
        // console.log("Promise is resolved");
        resolve(true)
    }, 5000)

})

let p2 = new Promise((resolve, reject) => {
    console.log("Pending---");
    setTimeout(() => {
        // console.log("Promise is rejected");
        reject(new Error("Error"))
    }, 5000)
})

console.log(p1, p2)

p1.then((value) => {
    console.log(value)
})

p2.catch((error) => {
    console.log("Some error occured in p2 ", error)
})


// Example

let timeout_value = 100;

let transaction_status = new Promise((resolve, reject) => {
    if (timeout_value <= 100) {
        resolve("Transfer Successfull!!")
    } else {
        reject("Error: Transer Unsuccessful!!")
    }
})

transaction_status.then((value) => {
    console.log(value)
}, (error) => {
    console.log(error)
})
