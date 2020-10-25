/*
Write a function delayCounter that accepts a number (called 'target') as the first argument and a number of milliseconds (called 'wait')
as the second argument, and returns a function.

When the returned function is invoked, it should log to the console all of the numbers between 1 and the target number, spaced apart by 'wait' milliseconds.
*/
function delayCounter(target, wait) {
  let counter = 0;
    return function() {
    let intv = setInterval( () => {
      ++counter
      if ( counter <= target  ) console.log( counter )
      else clearInterval( intv )
    }, wait)
  }
}

// UNCOMMENT THESE TO TEST YOUR WORK!
const countLogger = delayCounter(3, 1000)
countLogger();
// After 1 second, log 1
// After 2 seconds, log 2
// After 3 seconds, log 3