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

// Task 6
function findUnique (...args) {
    return new Set(args).size === args.length;
}

// verifying if functions from tasks 5-6 work:
let arrInput = prompt("Enter numbers separated by space or comma");
let arrParsed = arrInput.split(/[\s,]+/);   
let numbers = arrParsed.map(str => parseFloat(str));
numbers = numbers.filter(num => !isNaN(num));

if (numbers.length === 0) {
    console.log("No valid numbers entered.");
  } else {
    let minValue = findMin(...numbers);
    console.log("Minimum value is ", minValue);
    let ifUnique = findUnique(...numbers);
    console.log("The input numbers create a unique array: ", ifUnique);
  }

// Task 7
function getLastElements(arr, x) {
  if (!Array.isArray(arr) || arr.length === 0) {return undefined};

  if (x === undefined) {
    return arr[arr.length - 1];
  } else {
    return arr.slice(-x);
  }
}
console.log(getLastElements([ 3 , 4 , 10, - 5], 2));

// Task 8
function goUppercase(str) {
    return str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}
let wordsInput = prompt("Enter some words");
console.log("Making user input uppercase: ", goUppercase(wordsInput));