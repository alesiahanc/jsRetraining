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

//Task 4 
class Worker {
    constructor (fullName, dayRate, workingDays, experience) {
        this.fullName = fullName;
        this.dayRate = parseInt(dayRate);
        this.workingDays = parseInt(workingDays);
        this._experience = 1.2;
    }
    showSalary() {
        return this.dayRate * workingDays;
    }
    showSalaryWithExperience () {
        return this.dayRate * this.workingDays * this.experience;
    }
    get experience() {
        return this._experience;
    }
    set experience(value) {
        this._experience = value;
    }
}
// Workers
let worker1 = new Worker("John Johnson", 20, 23);
let worker2 = new Worker("Tom Tomson", 48, 22);
let worker3 = new Worker("Andy Ander", 29, 21);

console.log(`Worker ${worker1.fullName} has initial experience of ${worker1.experience}`);

// Updating worker's exerience
worker1.experience = 1.5;

// New experience
console.log(`Now ${worker1.fullName} has experience: ${worker1.experience}`);

let workers = [ worker1, worker2, worker3];

// Sorting by salary
workers.sort((a, b) => a.showSalaryWithExperience() - b.showSalaryWithExperience());

// Displaying sorted workers
console.log("\nSorted salary:");
workers.forEach(worker => {
    console.log(`${worker.fullName}: ${worker.showSalaryWithExperience()}`);
});