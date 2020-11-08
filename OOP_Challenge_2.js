/*
Using Object.create

Challenge 1/3
Inside personStore object, create a property greet where the value is a function that logs "hello".

Challenge 2/3
Create a function personFromPersonStore that takes as input a name and an age. When called, the function will create person objects using the Object.create method on the personStore object.

Challenge 3/3
Without editing the code you've already written, add an introduce method to the personStore object that logs "Hi, my name is [name]".
*/
function personFromPersonStore(name, age) {
	const person = Object.create( personStore );
  person.name = name
  person.age = age
  return person;
}

const sandra = personFromPersonStore('Sandra', 26);


// /********* Uncomment these lines to test your work! *********/
 console.log(sandra.name); // -> Logs 'Sandra'
 console.log(sandra.age); //-> Logs 26
 sandra.greet(); //-> Logs 'hello'
 sandra.introduce(); // -> Logs 'Hi, my name is Sandra'