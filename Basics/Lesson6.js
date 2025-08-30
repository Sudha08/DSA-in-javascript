// Lesson 6 - Loop within Loop
/* ------------------------------------------------------------- */

// simple loop inside loop

export function loopInLoop1() {
    console.log("Simple Loop inside Loop");
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            console.log("i - " + i + " j - " + j);
        }
    }
}

/* ------------------------------------------------------------- */

// condition - j < i

export function loopInLoop2() {
    console.log("Loop within Loop with condition j < i");
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < i; j++) {
            console.log("i - " + i + " j - " + j);
        }
    }
}

/* ------------------------------------------------------------- */

// condition - j <= i

export function loopInLoop3() {
    console.log("Loop within Loop with condition j <= i");
    for (let i = 0 ; i < 5; i++) {
        for (let j = 0; j <= i; j++) {
            console.log("i - " + i + " j - " + j);
        }
    }
}

/* ------------------------------------------------------------- */

// reverse loop with 'j'

export function reverseLoop1() {
    console.log("Reverse loop with 'j'");
    for (let i = 0; i < 5; i++) {
        for (let j = i; j >0; j--) {
            console.log("i - " + i + " j - " + j);
        }
    }
}

/* ------------------------------------------------------------- */

// reverse loop with 'i'

export function reverseLoop2() {
    console.log("Reverse loop with 'i'");
    for (let i = 5; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            console.log("i - " + i + " j - " + j);
        }
    }
}

// how many times does both the loops run - total
// how many times does outer loop runs
// how many times does inner loop runs
// dry run all the loops to see how i,j value changes

