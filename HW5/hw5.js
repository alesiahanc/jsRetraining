// Task 1 

function propsCount (obj) {
    let count = Object.keys(obj).length;
    return count;
}
// test object: 
let mentor = {
    course: "JS fundamental",
    duration: 3,
    direction: "web development"
};

console.log(propsCount(mentor));

// Task 2 

let testObject = {
    fieldOne: "Value One",
    fieldTwo: "Value Two",
    fieldThree: "Value Three",
    fieldFour: "Value Four",
    fieldFive: "Value Five"
}

function showProps(obj) {
    let result = Object.keys(obj);
    return result;
}

console.log(showProps(testObject));

//Task 3 

// 3. Create the Person class , in which the constructor accepts the name and surname parameters 
// and also contains the showFullName () method, which displays the person's first and last name.

// Student class is inherited from the Person class , 
// the constructor of which, in addition to name and surname , 
// accepts the year parameter (year of admission to the university).
// In the Student class it is necessary to redefine the method showFullName ( middleName ) 
// so that not only the name, surname, but also the patronymic ( middleName ) of the student is displayed.
// Also in the Student class it is necessary to implement the showCourse () method , 
// which will display the current course of the student (from 1 to 6). 
// The value of the course will be determined as the difference between the current year (determine independently) 
// and the year of admission to the university .

// Example result :
// const stud1 = new Student("Petro", " Petrenko ", 2015);
// console.log(stud1.showFullName(" Petrovych ")); // Petrenko Petro Petrovych
// console.log("Current course: " + stud1.showCourse()); //Current course: 6



