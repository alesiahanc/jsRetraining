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
let userInput = prompt("Enter a number and a degree you want to raise, separate by comma or space");
let parts = userInput.split(/[\s,]+/);

let number = parts[0];
let degree = parts[1];

if (isNaN(number) || isNaN(degree)) {
    console.log("Please enter two valid numbers.");
  } 
  else {
    console.log(`Number ${number} in degree ${degree} is`, number ** degree);
  }

// Task 5
// the func: 
function findMin(...args) {
    let min = Math.min(...args);
    return min;
  }
// verifying if works:
let arrInput = prompt("Enter numbers separated by space or comma");
let arrParsed = arrInput.split(/[\s,]+/);   
let numbers = arrParsed.map(str => parseFloat(str));
numbers = numbers.filter(num => !isNaN(num));

if (numbers.length === 0) {
    console.log("No valid numbers entered.");
  } else {
    let minValue = findMin(...numbers);
    console.log("Minimum value is ", minValue);
  }

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