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
function getValidSide(promptText) {
    let sideLength;
    do {
      sideLength = prompt(promptText);

      if (!sideLength) {
        alert("Please enter a number");
      } else if (isNaN(sideLength)) {
        alert("Please enter a number, not something else");
    } else if (parseFloat(sideLength) <= 0) {
        alert("Number must be greater than zero");
      }
    }
    
    while (!sideLength || isNaN(sideLength) || parseFloat(sideLength) <= 0);
    return parseFloat(sideLength);
}
  

let firstLength = Number(getValidSide("Enter the length of the first side of triangle"));
let secLength = Number(getValidSide("Enter the length of the second side of triangle"));
let thirdLength = Number(getValidSide("Enter the length of the third side of triangle"));

let semiPerimeter = (firstLength + secLength + thirdLength) / 2;
let area = Math.sqrt(semiPerimeter * (semiPerimeter - firstLength) * (semiPerimeter - secLength) * (semiPerimeter - thirdLength)).toFixed(3);
console.log("Area is: ", area)

let sides = [firstLength, secLength, thirdLength]
function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  }

  sides.sort(compareNumeric);

  if ((sides[2] ** 2) === (sides[0] ** 2) + (sides[1] ** 2)) {
    console.log("The triangle is right-angled");
  }
  else {
    console.log("The triangle is NOT right-angled");
  }

// Task 7 
let hours = new Date().getHours();
console.log(`Hours is ${hours}`)

// Option 1: 
if (0 <= hours && hours < 5) {
    console.log("Good night");
}
else if (5 <= hours && hours < 11) {
    console.log("Good morning");
}
else if (11 <= hours && hours < 17) {
    console.log("Good day");
}
else {
    console.log("Good evening");
}
// Option 2 
switch (true) {
    case (0 <= hours && hours < 5):
        console.log("Good night");
        break;
    case (5 <= hours && hours < 11):
        console.log("Good morning");
        break;
    case (11 <= hours && hours < 17):
        console.log("Good day");
        break;
    default:
        console.log("Good evening");
}