/*
Challenge 15
Create a function russianRoulette that accepts a number (let us call it n), and returns a function.
The returned function will take no arguments, and will return the string 'click' the first n - 1 number of times it is invoked.
On the very next invocation (the nth invocation), the returned function will return the string 'bang'.
On every invocation after that, the returned function returns the string 'reload to play again'.
*/

function russianRoulette(num) {
    let counter = 0;
      return function() {
      counter++
      if ( counter < num ) return 'click'
      else if ( counter == num ) return 'bang'
      else return 'reload to play again'
    }
}

// /*** Uncomment these to check your work! ***/
const play = russianRoulette(3);
console.log(play()); // => should log 'click'
console.log(play()); // => should log 'click'
console.log(play()); // => should log 'bang'
console.log(play()); // => should log 'reload to play again'
console.log(play()); // => should log 'reload to play again'