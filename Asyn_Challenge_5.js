/*
Create a function limitedRepeat that console logs hi for now every second, but only for 5 seconds.
Research how to use clearInterval if you are not sure how to do this.
*/
function limitedRepeat() {
  let counter = 0;
  let intv = setInterval( () => {
    ++counter
    if ( counter === 5 ) clearInterval( intv ) 
    return console.log('Hi for now')    
  }, 1000 )  
}
// Uncomment the following line to check your work!
limitedRepeat(); // should log (every second, for 5 seconds): hi for now