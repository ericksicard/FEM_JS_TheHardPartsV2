/*
Challenge 7
Write a function rollCall that accepts an array of names and returns a function. The first time the returned function is invoked,
it should log the first name to the console. The second time it is invoked, it should log the second name to the console,
and so on, until all names have been called. Once all names have been called, it should log 'Everyone accounted for'.
*/
function rollCall(names) {
    let counter = 0;
    
    return function() {
      if ( counter >= names.length ) {
        console.log('Everyone accounted for')
      } else {
        console.log( names[counter] );
        ++counter;
      }
    }
  
}

// /*** Uncomment these to check your work! ***/
const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
rollCaller() // => should log 'Victoria'
rollCaller() // => should log 'Juan'
rollCaller() // => should log 'Ruth'
rollCaller() // => should log 'Everyone accounted for'