const name = "Max"; //name can not be changed
let age = 27;   // age can be changed
const hasHobbies = false;  //hasHobbies can not be changed

console.log(name, age, hasHobbies);

//function
function summarizedUser(name, age, hasHobbies) {
    return `Name is ${name}, age is ${age}, and User has hobbies: ${hasHobbies}`;
}
console.log(summarizedUser(name, age, hasHobbies));

//arrow function
const sumUser = (name, age, hasHobbies) => {
    return `Name is ${name}, age is ${age}, and User has hobbies: ${hasHobbies}`;
}
console.log(sumUser(name, age, hasHobbies));

const add = (a, b) => a + b;
console.log(add(10, 20));

const addOne = a => a + 1;
console.log(addOne(2));

const sayHi = () => 'Hi';
console.log(sayHi());