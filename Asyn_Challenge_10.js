/*
Write a function called debounce that accepts a function and returns a new function that only allows invocation of the given function after interval
milliseconds have passed since the last time the returned function ran.

Additional calls to the returned function within the interval time should not be invoked or queued, but the timer should still get reset.

For examples of debouncing, check out https://css-tricks.com/debouncing-throttling-explained-examples/
*/

function debounce(callback, interval) {
	let checkInterval = 0;
  setInterval( () => ++checkInterval , 1000)
  
  return function() {    
    if ( checkInterval == 0 || checkInterval >= interval/1000 ) {
      checkInterval = 0;
      return callback();
    }
    else checkInterval = 0;    
  }
  
}

// UNCOMMENT THESE TO TEST YOUR WORK!
 function giveHi() { return 'hi'; }
 const giveHiSometimes = debounce(giveHi, 3000);
 console.log(giveHiSometimes()); // -> 'hi'
 setTimeout(function() { console.log(giveHiSometimes()); }, 2000); // -> undefined
 setTimeout(function() { console.log(giveHiSometimes()); }, 4000); // -> undefined
 setTimeout(function() { console.log(giveHiSometimes()); }, 8000); // -> 'hi'