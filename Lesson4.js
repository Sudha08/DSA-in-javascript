/* Lesson 4 - Loops 2
------------------------------------------------------------- */

// Find the largest number in an array

// Brute force approach

    export function findLargestNumber(arr) {
        let largestNumber = -1; // assuming all the elements in tha array are +ve numbers

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > largestNumber) {
                largestNumber = arr[i];
            }
        }
        console.log("The largest number in the array is - " + largestNumber);
    }

/* ------------------------------------------------------------- */

// Largest number in an array - Optimized version 1

    export function findLargestNumber1(arr) {
        let largestNumber = -Infinity; // Initializing with the smallest number present in javascript

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > largestNumber) {
                largestNumber = arr[i];
            }
        }
        console.log("The largest number in the array is - " + largestNumber)
    }

/* ------------------------------------------------------------- */

// Largest number in an array - optimized version 2

    export function findLargestNumber2(arr) {
        let largestNumber = arr[0];

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > largestNumber) {
                largestNumber = arr[i];
            }
        }
        console.log("The largest number in the array is - " + largestNumber)
    }

/* ------------------------------------------------------------- */

// Find the smallest number in an array

    export function findSmallestNumber(arr) {
        let smallestNumber = Infinity; // Initializing with the largest number present in javascript

        for (let  i = 0; i < arr.length; i++) {
            if (arr[i] < smallestNumber) {
                smallestNumber = arr[i];
            }
        }
        console.log("The smallest number in the array is - " + smallestNumber);
    }
