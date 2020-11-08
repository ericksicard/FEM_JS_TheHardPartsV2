/*
EXTENSION: Subclassing

Challenge 1/5
Create an object adminFunctionStore that has access to all methods in the userFunctionStore object, without copying them over individually.
*/
const userFunctionStore = {
    sayType: function() {
      console.log("I am a " + this.type);
    }
  }
  
  function userFactory(name, score) {
    let user = Object.create(userFunctionStore);
    user.type = "User";
    user.name = name;
    user.score = score;
    return user;
}

const adminFunctionStore =  userFactory('Erick', 100);
adminFunctionStore.sayType() // -> I am a User


/*
Challenge 2/5
Create an adminFactory function that creates an object with all the same data fields (and default values) as objects of the userFactory class,
but without copying each data field individually.

Challenge 3/5
Then make sure the value of the 'type' field for adminFactory objects is 'Admin' instead of 'User'.

Challenge 4/5
Make sure that adminFactory objects have access to adminFunctionStore methods, without copying them over.
*/
function adminFactory(name, score) {
    let admin = userFactory(name, score)
    admin.type = 'Admin'
    return admin;
}



/*
EXTENSION: Mixins
Mixins are a tool in object-oriented programming that allows objects to be given methods and properties beyond those provided by their inheritance.
For this challenge, complete the missing code, giving all of the robotMixin properties to robotFido. Do this in a single line of code, without adding
the properties individually.
*/
class Dog {
    constructor() {
      this.legs = 4;
    }
    speak() {
      console.log('Woof!');
    }
  }
  
  const robotMixin = {
    skin: 'metal',
    speak: function() { console.log(`I have ${this.legs} legs and am made of ${this.skin}`) },
  }
  
  Object.assign(Dog.prototype, robotMixin)
  
  let robotFido = new Dog();
  
  
  // /********* Uncomment to test your work! *********/
   robotFido.speak() // -> Logs "I have 4 legs and am made of metal"