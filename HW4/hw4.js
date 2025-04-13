// Task 1
function calcRectangleArea() {
    let userInput = prompt("Enter width and length of a rectangle, separate by comma or space");
    let parts = userInput.split(/[\s,]+/);

    let width = Number(parts[0]);
    let height = Number(parts[1]); 

    if (isNaN(width) || isNaN(height)) {
        throw new Error('Both parameters must be valid numbers.');
      }
      return width * height;
}

try {
    let result = calcRectangleArea();
    console.log("The area of provided rectangle is: ", result);
} catch (exception) {
    console.log(exception.name);
    console.log(exception.message);
    console.log(exception.stack);
}

// Task 2
function checkAge () {
    let userInput = prompt("Enter your age");
    if (!userInput || userInput.trim() === "") {
        throw new Error ("User input is empty");
    }

    let age = Number(userInput);
    
    if (isNaN(age)) {
        throw new Error("Provided age is not a number");
      }
    else if (age < 14) {
        throw new Error("User is too young");
    }
    else {
        console.log("You can watch a movie");
    }
}

try {
    result2 = checkAge();
}
catch (exception) {
    console.log(exception.name);
    console.log(exception.message);
}

// Task 3
class MonthException extends Error {
    constructor(message) {
        super(message);
        this.name = "MonthException"
    }
}

let monthNames = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December"
}

function showMonthName(month) {
    if (month in monthNames) {
        console.log(monthNames[month]);
    }
    else {
        throw new MonthException("Incorrect month number");
    }
}

let month = prompt("Enter a month's number");
try {
    result3 = showMonthName(month);
} catch (exception){
    console.log(exception.name, exception.message);
}

// Task 4
function showUser(id) {
    if (id >= 0) {
        return { id };
    }
    else {
        throw new Error("Error: ID must not be negative: " + id);
    }
}

function showUsers(ids) {
    let validUsers = []
    for (let id of ids ){
        try {
            let user = showUser(id);
            validUsers.push(user);
        }
        catch (exception) {
            console.log(exception.message);
        }
    }
    console.log(validUsers);
}

showUsers([7, -12, 44, 22]);