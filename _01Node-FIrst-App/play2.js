//person object
const person = {
    name: 'Max',
    age: 27,
    greet: () => {
        console.log('Hello I am ' + this.name); //this.name refers to the global in arrow function, so undefined will be print
    },
    greet2: function () {
        console.log('Hello I am ' + this.name); //this will refer to the object, so print Max
    }
};
console.log(person);
person.greet();
person.greet2();

//arrays
const hobbies = ['Painting', 'Gaming'];
for (let hobby of hobbies) {
    console.log(hobby);
}

const updatedHobbies = hobbies.map(hobby => hobby.toUpperCase());  //map will return a new array
console.log(updatedHobbies);
console.log(hobbies);

const copiedHobbies = [...hobbies]; //spread operator, copy entire array
console.log(copiedHobbies);

const toArray = (...args) => {
    return args;
};
console.log(toArray(1, 2, 3));

//destructuring
const printName = ({ name, age }) => `${name}'s age is ${age}`;
console.log(printName(person)); 