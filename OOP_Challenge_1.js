/*
Working with Object Literals
Challenge 1/1
Create a function that accepts two inputs (name and age) and returns an object. Let's call this function makePerson. This function will:
1- create an empty object
2- add a name property to the newly created object with its value being the 'name' argument passed into the function
3- add an age property to the newly created object with its value being the 'age' argument passed into the function
4- return the object
*/
function makePerson(name, age) {
	const person = {}
  person.name = name
  person.age = age
  return person
}

const vicky = makePerson('Vicky', 24);


// /********* Uncomment these lines to test your work! *********/
 console.log(vicky.name); // -> Logs 'Vicky'
 console.log(vicky.age); // -> Logs 24