/*
Challenge 6
Write a function delay that accepts a callback as the first parameter and the wait in milliseconds
before allowing the callback to be invoked as the second parameter. Any additional arguments after
wait are provided to func when it is invoked. HINT: research setTimeout();
*/

function delay(func, wait) {
    return function(name) {
      let result = setTimeout( () => func(name), wait )
    } 
}
  
  
const msg = name => console.log(`Hi ${name}`)
const greetings = delay(msg, 1000)
greetings('Erick') // => 'Hi Erick'
  