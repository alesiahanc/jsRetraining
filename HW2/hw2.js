// Task 1
let x = 1;
let y = 2;
let res1 = x + y + ""; 
console.log(res1); // "12"
console.log( typeof res1); // "string"

let res2 = !!x + 2 + "";
console.log(res2); // "true2"
console.log( typeof res2); // "string"

let res3 = !!y
console.log(res3); // true
console.log( typeof res3); // " boolean "


let res4 = String(x) * y 
console.log(res4); // NaN
console.log( typeof res4); // "number"

// Task 2
let userNumber = prompt("Enter any number here");
if ((userNumber % 2 === 0 && userNumber > 0) || userNumber % 7 === 0) {
console.log(`Number ${userNumber} is correct`);
}
else {
    console.log(`Number ${userNumber} is incorrect`);
}

//Task 3
let myArray = [1, "str", true, null];
console.log("An riginal array is: ", myArray);

let newArrEl = prompt("Enter something to add in an array");

// add a new element in the end 
myArray.push(newArrEl);
console.log(`The fifth element in the array is ${myArray[4]}`);

// rm the first element
myArray.shift();
console.log("The updated array is: ", myArray);

// Task 4 
let inintArr = [" Rome ", " Lviv ", " Warsaw "];
let result = inintArr.join("*");

console.log(`Final string is ${result}`);

// Task 5
let isAdult = prompt("Enter your age");

if (isAdult > 18) {
    console.log("You have reached the age of majority");
}
else {
    console.log("You are still too young");
}

// Task 6
let firstLength = prompt("Enter the length of the first side of triangle")
let sectLength = prompt("Enter the length of the second side of triangle")
let thirdLength = prompt("Enter the length of the third side of triangle")


