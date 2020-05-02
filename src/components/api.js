import React from "react"
import axios from "axios"


function API () {
    const [jokeState, setJokeState] = React.useState()
    
    
    console.log(jokeState)
    // useEffect to make sure the API only runs once using [], so that data is not constantly being ran each time the app runs.
    React.useEffect(() => {
        const promise = axios.get ('https://official-joke-api.appspot.com/random_joke') 
        promise.then(response=>{
            // want to store the data in setJokeState
            setJokeState(response.data)
});

},[] )
if(jokeState){
    return (
        <div>
            <p>{jokeState.setup}</p>
            <p><i>{jokeState.punchline}</i></p>
        </div>
    )
    } else {
        return <p>Joke loading </p>

    }

}


// axios.get ....... is a promise. The promise is pending to get a response from the api.

// .then tells the promise to then output the response in the console.log.
// if we add something else in the console this would output first as the promise is still retrieving the response. 

// Majority of the time you right response.data this is just something that needs to be known



export default API