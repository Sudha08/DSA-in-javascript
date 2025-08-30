
/* Lesson 3 - Loops 1
------------------------------------------------------------- */

// print "Hello" 10 times

    export function printHello() {
        for (let i = 0; i < 10; i++) {
            console.log("Hello");
        }
    }

// ------------------------------------------------------------- 

// print all the numbers in an Array

    export function printElements(arr) {
        for (let i = 0; i < arr.length; i++) {
            console.log(arr[i]);
        }
    }

// ------------------------------------------------------------- 

// Search an element in an array, If the element is present return the index of the element
// else return -1

    export function searchElement(arr, num) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === num) {
                return i;
            }
        }
        return -1;
    }

// ------------------------------------------------------------- 

// Count all the negative numbers in an array and return the count

    export function countNegativeNumbers(arr) {
        let count = 0;

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < 0) {
                count++;
            }
        }
        return count;
    }

// ------------------------------------------------------------- 

// Print all the even numbers

    export function printEvenNumbers(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                console.log(arr[i]);
            }
        }
    }

// ------------------------------------------------------------- 
