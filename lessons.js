import { sum, calculateSquare } from './Basics/Lesson1.js';
import { checkVotingEligibility, isOddEven } from './Basics/Lesson2.js';
import { printHello, printElements, searchElement, printEvenNumbers, countNegativeNumbers } from './Basics/Lesson3.js';
import { findLargestNumber, findLargestNumber1, findLargestNumber2, findSmallestNumber } from './Basics/Lesson4.js';
import { getSecondLargest } from './Basics/Lesson5.js';
import { loopInLoop1, loopInLoop2, loopInLoop3, reverseLoop1, reverseLoop2 } from './Basics/Lesson6.js';
import { pattern1, pattern2, pattern3, pattern4, reversePattern1, reversePattern2, complexPattern1, complexPattern2, complexPattern3 } from './Basics/Lesson7.js';
import { countDigits } from './Basics/Lesson8.js';
import {  } from './Basics/Lesson9.js';
import {  } from './Basics/Lesson10.js';

window.onload = (event) => {
    loadLesson1();
};

// lesson 1
document.getElementById("lesson1").addEventListener("click", () => {
    loadLesson1();
});

// lesson 2
document.getElementById("lesson2").addEventListener("click", () => {
    console.clear();
    showLesson("Basics\\Lesson2.js");
    console.log("Lesson 2 - Conditional Statement - if- else");

    console.log("");

    console.log("method 1 - Check Voting Eligibility");

    checkVotingEligibility(10);
    checkVotingEligibility(18);
    checkVotingEligibility(40);
    checkVotingEligibility(-5);

    console.log("");

    console.log("method 2 - Is Odd or Even");

    isOddEven(2);
    isOddEven(55);
    isOddEven(-2);
    isOddEven(0);
});

// lesson 3
document.getElementById("lesson3").addEventListener("click", () => {
    console.clear();
    showLesson("Basics\\Lesson3.js");
    console.log("Lesson 3 - Loops 1");

    console.log("");

    console.log("method 1 - Print Hello");
    printHello(); // method 1

    console.log("");

    console.log("method 2 - Print all Elements in an Array");
    let arr = [10, 2, 3, 7, 0, 11, 23, 42];
    printElements(arr); // method 2

    console.log("");
    
    console.log("Search an element in an array");
    console.log(arr);
    console.log(searchElement(arr, 2)); // method 3
    console.log(searchElement(arr, 11));
    console.log(searchElement(arr, 4));

    console.log("");

    console.log("Count negative numbers in an array");
    let arr2 = [-2, 0, 4, -10, 6, 31, -15, 50];
    console.log(arr2);
    console.log(countNegativeNumbers(arr2)); // method 4

    
    console.log("");

    console.log("Print all even numbers in an Array")
    let arr3 = [2, 10, 11, 9, 5, 14, 22, 0, -4];
    console.log(arr3);
    printEvenNumbers(arr3); // method 5
});

// lesson 4
document.getElementById("lesson4").addEventListener("click", () => {
    console.clear();
    showLesson("Basics\\Lesson4.js");
    console.log("Lesson 4 - Loops 2");

    console.log("");

    console.log("method 1 - Find the largest element in the array - Normal approach");
    let arr = [2, 10, 11, 9, 5, 14, 22, 0];
    console.log(arr);
    findLargestNumber(arr);

    console.log("");

    console.log("method 2 - Find the largest element in the array - Approach 2 - to cover both +ve & -ve number");
    let arr2 = [2, 10, 11, 9, 5, 14, 50, 0, -4, -10];
    console.log(arr2);
    findLargestNumber1(arr2);

    console.log("");

    console.log("method 3 - Find the largest element in the array - Approach 3 - to cover both +ve & -ve number");
    let arr3 = [-2, -4, -10];
    console.log(arr3);
    findLargestNumber2(arr3);

    console.log("");

    console.log("method 4 - Find the smallest element in the array - Approach to cover both +ve & -ve number");
    console.log(arr3);
    findSmallestNumber(arr3);
    console.log(arr);
    findSmallestNumber(arr);
});

// lesson 5
document.getElementById("lesson5").addEventListener("click", () => {
    console.clear();
    showLesson("Basics\\Lesson5.js");
    console.log("Lesson 5 - Second Largest Number in an Array");

    let arr = [2, 10, 11, 9, 5, 14, 22, 0];
    console.log(arr);
    console.log(getSecondLargest(arr));

    console.log("");

    let arr2 = [1];
    console.log(arr2);
    console.log(getSecondLargest(arr2));

    console.log("");

    let arr3 = [-2, -10, 0];
    console.log(arr3);
    console.log(getSecondLargest(arr3));

});

// lesson 6
document.getElementById("lesson6").addEventListener("click", () => {
    console.clear();
    showLesson("Basics\\Lesson6.js");
    console.log("Lesson 6 - Loop within Loop");

    console.log("");
    loopInLoop1();

    console.log("");
    loopInLoop2();

    console.log("");
    loopInLoop3();

    console.log("");
    reverseLoop1();

    console.log("");
    reverseLoop2();
});

// lesson 7
document.getElementById("lesson7").addEventListener("click", () => {
    console.clear();
    showLesson("Basics\\Lesson7.js");
    console.log("Lesson 7 - Star Pattern");

    console.log("");  
    pattern1();

    console.log("");
    pattern2();

    console.log("");
    pattern3();

    console.log("");
    pattern4();

    console.log("");
    reversePattern1();

    console.log("");
    reversePattern2();

    console.log("");
    complexPattern1();

    console.log("");
    complexPattern2();

    console.log("");
    complexPattern3();
});

// lesson 8
document.getElementById("lesson8").addEventListener("click", () => {
    console.clear();
    showLesson("Basics\\Lesson8.js");
    console.log("Lesson 8 - Count Digits in a number");

    console.log("");
    let num = 215
    console.log("Number of digits in " + num + " = " + countDigits(num));

    console.log("");
    num = 5234545;
    console.log("Number of digits in " + num + " = " + countDigits(num));

    console.log("");
    num = 0;
    console.log("Number of digits in " + num + " = " + countDigits(num));

    console.log("");
    num = -32687;
    console.log("Number of digits in " + num + " = " + countDigits(num));
});

// lesson 8
document.getElementById("lesson9").addEventListener("click", () => {
    console.clear();
    showLesson("Basics\\Lesson9.js");
    console.log("Lesson 9 - Palindrome");
});

// lesson 8
document.getElementById("lesson10").addEventListener("click", () => {
    console.clear();
    showLesson("Basics\\Lesson10.js");
    console.log("Lesson 10 - Reverse a number");
});


// Load lesson 1 during Initial load of the site
function loadLesson1() {
    console.clear();
    showLesson("Basics\\Lesson1.js");
    console.log("Lesson 1 - Introduction");
    console.log("Sum" + " - " + sum (10, 20));

    let x = 30, y = 50;
    console.log("Sum of "+ x + " + " + y +  " = " + sum (x, y));

    let n = 5;
    let squareRes = calculateSquare(n);
    console.log("Square of " + n + " - " + squareRes);
}
