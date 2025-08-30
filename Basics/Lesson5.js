

   // Lesson 5 - Second Largest Element in an Array
   /* ------------------------------------------------------------- */


   export function getSecondLargest(arr) {
    if (arr.length < 2) {
        return "Array should have atleast 2 elements";
    }
    
    let firstLargest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] !== firstLargest) {
            secondLargest = arr[i];
        }
    }
     return secondLargest;
}
