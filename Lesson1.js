// Lesson 1 - Introduction
//-----------------------------

console.log("Lesson 1 - Introduction");

/* ------------------------------------------------------------- */

// Sum of 2 numbers

function sum (a , b) {
    let res = a + b;
    return res;
}

console.log("Sum" + " - " + sum (10, 20));

let x = 30, y = 50;
console.log("Sum of "+ x + " + " + y +  " = " + sum (x, y));

/* ------------------------------------------------------------- */

// Square of 2 nums

function calculateSquare (num) {
    let square = num * num;
    return square;
}

let n = 5;
let squareRes = calculateSquare(n);
console.log("Square of " + n + " - " + squareRes);

/* ------------------------------------------------------------- */

