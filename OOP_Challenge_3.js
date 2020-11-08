/*
Using the NEW keyword

Challenge 1/3
Create a function PersonConstructor that uses the this keyword to save a single property onto its scope called greet.
greet should be a function that logs the string 'hello'.
*/
function PersonConstructor() {
	this.greet = function() { console.log('hello')}
}

// /********* Uncomment this line to test your work! *********/
const simon = new PersonConstructor;
 simon.greet(); // -> Logs 'hello'


/*
Challenge 2/3
Create a function personFromConstructor that takes as input a name and an age. When called, the function will
create person objects using the new keyword instead of the Object.create method.
*/
function personFromConstructor(name, age) {
    const person = new PersonConstructor();
    person.name = name
    person.age = age
    return person
}

const mike = personFromConstructor('Mike', 30);
// /********* Uncomment these lines to test your work! *********/
console.log(mike.name); // -> Logs 'Mike'
console.log(mike.age); //-> Logs 30
mike.greet(); //-> Logs 'hello'


/*
Challenge 3/3
Without editing the code you've already written, add an introduce method to the PersonConstructor function that logs "Hi, my name is [name]".
*/
PersonConstructor.prototype.introduce = function() { console.log(`Hi, my name is ${this.name}`) }
mike.introduce(); // -> Logs 'Hi, my name is Mike'