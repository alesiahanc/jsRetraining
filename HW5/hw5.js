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

