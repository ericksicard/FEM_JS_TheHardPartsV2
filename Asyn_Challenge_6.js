/*
Write a function called everyXsecsForYsecs that will accept three arguments: a function func, a number interval, and another number duration.
everyXsecsForYsecs will execute the given function every interval number of milliseconds, but then automatically stop after duration milliseconds.

Then pass the below sayHi function into an invocation of everyXsecsForYsecs with 1000 interval time an 5000 duration time.
What do you expect to happen?
*/

function everyXsecsForYsecs( func, interval, duration ) {
  let counter = 0;
  let intv = setInterval( () => {
    counter += 1000
    if ( counter >= duration ) clearInterval( intv )
    func()
  }, interval )
}
// Uncomment the following lines to check your work!
function theEnd() {
  console.log('This is the end!');
}
everyXsecsForYsecs(theEnd, 1000, 5000); // should invoke theEnd function every 1 second, for 5 seconds): This is the end!