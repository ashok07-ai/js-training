// Some more Exmaples
// Pattern Printing
// *
// **
// ***
// ****
// *****

for (let i = 1; i <= 5; i++) {
    for (j = 1; j <= i; j++) {
        document.write('*');
    }
    document.write("</br>")
}


// 1
// 12
// 123
// 1234
// 12345

for (let i = 1; i <= 5; i++) {
    for (j = 1; j <= i; j++) {
        document.write(j)
    }
    document.write("</br>")
}

// Pattern Printing
//     *
//    **
//   ***
//  ****
// *****

for (let i = 1; i <= 5; i++) {
    for (k = 1; k <= 5 - i; k++) {
        document.write("&nbsp;&nbsp;")
    }
    for (j = 1; j <= i; j++) {
        document.write('*');
    }
    document.write("</br>")
}

