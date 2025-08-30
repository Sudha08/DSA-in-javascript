
/* Lesson 2 - Conditional Statement - if- else
------------------------------------------------------------- */

// Check voting eligibility

        export function checkVotingEligibility(age) {
                if (age >= 18) {
                        console.log("Age " + age + " - Eligible to vote");
                } else {
                        console.log("Age " + age + " - Note eligible to vote");
                }
        }

        // checkVotingEligibility(10);
        // checkVotingEligibility(18);
        // checkVotingEligibility(40);
        // checkVotingEligibility(-5);

// ---------------------------------------------------------------

// Odd or Even

        export function isOddEven(num) {
                if (num % 2 === 0) {
                        console.log(num + " is an even number");
                } else {
                        console.log(num + " is an odd number");
                }
        }

        // isOddEven(2);
        // isOddEven(55);
        // isOddEven(-2);
        // isOddEven(0);


