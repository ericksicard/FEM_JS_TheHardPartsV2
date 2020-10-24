/*
Challenge 13
There's no such thing as private properties on a JavaScript object! But, maybe there are? Implement a function createSecretHolder(secret)
which accepts any value as secret and returns an object with ONLY two methods. getSecret() which returns the secret setSecret() which sets the secret.
*/

function createSecretHolder(secret) {
    let secretHolder = secret;
    return {
      getSecret: function() { console.log(secretHolder) },
      setSecret: function(newSecret) { secretHolder = newSecret }
    }
}

// /*** Uncomment these to check your work! ***/
let obj = createSecretHolder(5)
obj.getSecret() // => returns 5
obj.setSecret(2)
obj.getSecret() // => returns 2
  