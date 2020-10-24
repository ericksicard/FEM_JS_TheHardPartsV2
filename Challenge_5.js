/*
Challenge 5
Write a function after that takes the number of times the callback needs to be called before being executed
as the first parameter and the callback as the second parameter.
*/
function after(count, func) {
    let counter = 0;
    
    return function result() {
      ++counter;
      if ( counter >= count ) {
        return func()
      } else {
        return;
      }
    }
}

// /*** Uncomment these to check your work! ***/
const called = function() { console.log('hello') };
const afterCalled = after(3, called);
afterCalled(); // => nothing is printed
afterCalled(); // => nothing is printed
afterCalled(); // => 'hello' is printed