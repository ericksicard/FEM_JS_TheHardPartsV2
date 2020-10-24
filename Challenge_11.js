/*
Challenge 11
Create a function dateStamp that accepts a function and returns a function. The returned function will accept however many arguments the passed-in
function accepts, and return an object with a date key that contains a timestamp with the time of invocation, and an output key that contains the
result from invoking the passed-in function. HINT: You may need to research how to access information on Date objects.
*/

function dateStamp(func) {
    const datePrint = {
      date: '',
      output: ''
    }
      return function(num) {
      datePrint.date = new Date().toISOString().slice(0, 10);
      datePrint.output = func(num)
      return datePrint;
    }
}

// /*** Uncomment these to check your work! ***/
const stampedMultBy2 = dateStamp(n => n * 2);
console.log(stampedMultBy2(4)); // => should log { date: (today's date), output: 8 }
console.log(stampedMultBy2(6)); // => should log { date: (today's date), output: 12 }