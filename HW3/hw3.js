// Task 1 
let arr1 = [2, 3, 4, 5];
let result = 1;
for (let i in arr1) {
    result *= arr1[i];
}
console.log(`Result using for is ${result}`);

let result2 = 1;
i = 0
while (i < arr1.length) {
    result2 *= arr1[i];
    i ++;
} 
console.log(`Result using while is ${result2}`);

// Task 2
for (let number = 0; number < 16; number++) {
    if (number % 2 === 0) {
        console.log(`Number ${number} is even`);
    }
    else {console.log(`Number ${number} is odd`);}
}

// Task 3
// func to get a random number
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
// func to create an array
function randArray (lenArr) {
let resArr = [];
while (resArr.length < lenArr) {
    resArr.push(getRandomInt(1, 500));
}
return resArr;  
}

console.log("Generated array of random integers: ", randArray(5));

// Task 4 
// Write the function raiseToDegree(a, b), which returns the result of raising the number a to the power of b . The function works only with integers. Implement the interface for entering numbers a , b from the keyboard.
// Sample Output :
// raiseToDegree ( 3 , 4 ); // 81

// Implement the findMin() function , which should accept an arbitrary number of numeric arguments and return the one with the smallest value. Tip: you can use the special arguments array for the solution .
// Sample Output :
// findMin (12, 14, 4, -4, 0.2); // => - 4


// 6. Write the function findUnique(arr), which accepts an array “arr” and checks if all elements of array are unique ( no doubles ), then function will return true if all elements are unique, otherwise - false.
// Sample Output :
// findUnique ([1, 2, 3, 5, 3]); // => false
// findUnique ([1, 2, 3, 5, 11 ]); // => true

// 7 . Write a function that returns the last element of an array. The function can accept 2 parameters: the 1st array, the 2nd numerical parameter corresponding to the number of "x" of the last elements of the array to be output.
// Sample Output:
// console.log(last Elem ([ 3 , 4 , 1 0, - 5 ])); // - 5 console.log(last Elem ([ 3 , 4 , 1 0, - 5 ], 2 )); // [ 1 0, - 5 ] console.log(last Elem ([ 3 , 4 , 1 0, - 5 ], 8 )); // [ 3 , 4 , 1 0, - 5 ]

// 8 . Write a function that takes a string as an argument and converts the first letter of each word of the string to uppercase .
// Input string : 'i love java script'
// Output string: 'I Love Java Script