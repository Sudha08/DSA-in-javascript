// Lesson 8 - Count Digits in a number
/* ------------------------------------------------------------- */

export function countDigits(num) {
    if (num == 0) return 1; // edge case when num = 0

    // To handle negative numbers by converting -Ve number to +Ve number using Math.abs-- edge case

    num = Math.abs(num);

    let count = 0;

    while (num > 0) {
        num = Math.floor(num/10);
        count++;
    }

    return count;
}

/* JS Methods - 
Math.ceil
Math.floor
Math.round
Math.abs
*/

/* Edge case questions
- What if the number is 0
- what if the number is negative
- what if the number is really huge
*/
