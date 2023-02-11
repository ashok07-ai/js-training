// Break and Continue
// The "Break" statement jumps out of the loop
// The "Continue" statement jumps over one iteration in the loop

// Break Statement
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        document.write("The numbers is: ", i + "<br>")
        break;
    }
    document.write("After: ", i + "<br>")
}

// Continue Statement
for (let j = 1; j <= 5; j++) {
    if (j === 3) {
        document.write("The number is: ", j + "<br>")
        continue;
    }

    document.write("After: ", j + "<br>")
}

// Example: Make the loop stop when i = 5

for (let k = 0; k < 10; k++) {
    document.write(k + "<br>")
    if (k === 5) {
        break;
    }
}