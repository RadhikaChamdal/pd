import React from "react"
import axios from "axios"

// axios.get ....... is a promise. The promise is pending to get a response from the api.
axios.get ('https://official-joke-api.appspot.com/random_joke') 
// .then tells the promise to then output the response in the console.log.
// if we add something else in the console this would output first as the promise is still retrieving the response. 
.then(response=>{
// Majority of the time you right response.data this is just something that needs to be known
console.log(response.data)
})



