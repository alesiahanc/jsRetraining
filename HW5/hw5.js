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
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    showFullName() {
        alert(this.firstName, this.lastName);
    }

}
class Student extends Person {
    constructor(firstName, lastName, year) {
        super(firstName, lastName);
        this.year = parseInt(year);
    }
    showFullName(middleName) {
        this.middleName = middleName;
        alert(this.firstName + " " + this.middleName + " " + this.lastName);
    }
    showCourse() {
        let currentYear = new Date().getFullYear();
        return currentYear - this.year;
    }
}

// Added spaces in the function, as it seems more common + changed order in giving first, middle, last 
const stud1 = new Student("Petro", "Petrenko", 2024);
console.log(stud1.showFullName("Petrovych"));
console.log("Current course: " + stud1.showCourse()); 
