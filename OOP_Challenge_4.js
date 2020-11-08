/*
Using ES6 Classes

Challenge 1/2
Create a class PersonClass. PersonClass should have a constructor that is passed an input of name and saves
it to a property by the same name. PersonClass should also have a method called greet that logs the string 'hello'.
*/
class PersonClass {
	constructor( name ) {
    this.name = name;
	}
	greet() {console.log('hello')}
}

// /********* Uncomment this line to test your work! *********/
const george = new PersonClass;
george.greet(); // -> Logs 'hello'


/*
Challenge 2/2
Create a class DeveloperClass that creates objects by extending the PersonClass class. In addition to having a name property and greet method,
DeveloperClass should have an introduce method. When called, introduce should log the string 'Hello World, my name is [name]'.
*/
class DeveloperClass extends PersonClass {
    constructor(name, age) {
      super(name)
      this.age = age
    }  
    introduce() {console.log(`Hi, my name is ${this.name}`)}  
}
  
// /********* Uncomment these lines to test your work! *********/
const thai = new DeveloperClass('Thai', 32);
console.log(thai.name); // -> Logs 'Thai'
thai.introduce(); //-> Logs 'Hello World, my name is Thai'