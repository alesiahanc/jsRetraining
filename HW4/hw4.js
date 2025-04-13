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

// 3 . Create a Month Exception class whose constructor takes a message parameter and initializes the name field to 'MonthException'.
// Implement the showMonthName(month) function, 
// where the month parameter is the sequential number of the month of the year. 
// The function returns the name of the month according to the entered month number. 
// In case of incorrect input, an exception is thrown in the form of an object of the Month Exception class with the message 'Incorrect month number'.
// Write code that uses this function, provide handling of possible exceptions.
// An example of the program :
// > console . log ( showMonthName ( 5 ));
// May
// > console . log ( showMonthName ( 14 ));
// MonthException Incorrect month number