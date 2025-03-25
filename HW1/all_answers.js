// Answer for task 2
console.log("Hancharyk")

// Answer for task 4
const myObject = {
    String: "Hello, world!",
    Number: 42,
    Boolean: true,
    Undefined: undefined,
    Null: null
  };

  // Answer for task 5 
let isAdult = confirm("Have you reached the age of majority?");
console.log("Is the user an adult?", isAdult);

// Answer for task 3
let num1 = 1;
console.log("Variable 1 is ", num1)
let num2 = 2;
console.log("Variable 2 is ", num2)
num1 = num2;
console.log("Variable 1 after copying is ", num1)


// Answer for task 6
let firstName = "Alesia";
let surname = "Hancharyk"
let group = "jsRetraining";
let birthYear = 1991;
let maritalStatus = true;

let empty = null;
let nothing;

console.log("Type of birthYear var is ", typeof birthYear);
console.log("Type of maritalStatus var is ", typeof maritalStatus);
console.log("Type of group var is ", typeof group);
console.log("Type of surname var is ", typeof surname);
console.log("Type of name var is ", typeof firstName);

console.log("Type of name var is ", typeof empty);
console.log("Type of name var is ", typeof nothing);

// Answer for task 7
let login = prompt("What is your login?", "Enter login here");
let email = prompt("What is your email?", "Enter email here");
let password = prompt("What is your password?", "Enter password here");
alert(`Dear User ${login}, your email is ${email}, your password is ${password}.`)

// Answer for task 8
let secondsInMinute = 60;
let secondsInHour = 60 * secondsInMinute;
let secondsInDay = 24 * secondsInHour;
let secondsInMonth = 30 * secondsInDay;

alert(`Amount of seconds in an hour is ${secondsInHour}, in a day is ${secondsInDay}, in a month is ${secondsInMonth}.`)