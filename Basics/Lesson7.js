// Lesson 7 - Star Pattern
/* ------------------------------------------------------------- */

// Pattern 1

export function pattern1() {
    let n = 4;
    console.log("Pattern 1 : n = " + n);
    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j < n; j++) {
            row = row + "*";
        }
        console.log(row);
    }
}

/* ------------------------------------------------------------- */

// Pattern 2

export function pattern2() {
    let n = 6;
    console.log("Pattern 2 : n = " + n);

    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j <= i; j++) { // j<=i === j<i+1 - dry run to see how they are one and the same
            row = row + "*";
        }
        console.log(row);
    }
}

/* ------------------------------------------------------------- */

// Pattern 3

export function pattern3() {
    let n = 5;
    console.log("Pattern 3 : n = " + n);

    for (let i = 1; i <= n; i++) { // can also be (i = 0; i < n; i++)
        let row = "";
        for (let j = 1; j <= i; j++) { // can also be (j = 0; j <= i; j++)
            row = row + j; // can also be (row = row + (j + 1))
        }
        console.log(row);
    }
}

/* ------------------------------------------------------------- */

// Pattern 4

export function pattern4() {
    let n = 5;
    console.log("Pattern 4 : n = " + n);

    for (let i = 1; i <=n; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row = row + i;
        }
        console.log(row);
    }
}

/* ------------------------------------------------------------- */

// Reverse Pattern 1 - execution of loop has to be changed and cannot follow previous patterns

export function reversePattern1() {
    let n = 5;
    console.log("Reverse Pattern 1 : n = " + n);

    for (let i = n; i > 0; i--) {
        let row = "";
        for (let j = 0; j < i; j++) {
            row = row + (j+1);
        }
        console.log(row);
    }

    // solution 2
    /*
    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j < n-i; j++) {
            row = row + (j+1);
        }
        console.log(row);
    }
    */
}

/* ------------------------------------------------------------- */

// Reverse Pattern 2

export function reversePattern2() {
    let n = 5;
    console.log("Reverse Pattern 2 : n = " + n);

    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j < n-i; j++) {
            row = row + "*";
        }
        console.log(row);
    }
}

/* ------------------------------------------------------------- */

// Complex Pattern with stars and spaces

export function complexPattern1() {
    let n = 5;
    console.log("Complex Pattern with space * stars : n = " + n);

    for (let i = 0; i < n; i++) {
        let row = "";
        // adding empty spaces or dots
        for (let j = 0; j < n-(i+1); j++) {
            row = row + ".";
        }
        // adding stars
        for (let k = 0; k < i+1; k++) {
            row = row + "*";
        }
        console.log(row);
    }
}

/* ------------------------------------------------------------- */

// Complex pattern with 0s & 1s -- toggle switch

export function complexPattern2() {
    let n = 5;
    console.log("Complex Pattern with 0s & 1s : n = " + n);

    for (let i = 0; i < n; i++) {
        let row = "";
        let toggle = 1;

        for (let j = 0; j <= i; j++) {
            row = row + toggle;

            if (toggle == 1) {
                toggle = 0;
            } else {
                toggle = 1;
            }
        }
        console.log(row);
    }
}

/* ------------------------------------------------------------- */

// Complex pattern with 0s & 1s -- No toggle switch

export function complexPattern3() {
    let n = 5;
    console.log("Complex Pattern with 0s & 1s : n = " + n);

    let toggle = 1;

    for (let i = 0; i < n; i++) {
        let row = "";

        for (let j = 0; j <= i; j++) {
            row = row + toggle;

            if (toggle == 1) {
                toggle = 0;
            } else {
                toggle = 1;
            }
        }
        console.log(row);
    }
}
