import React from "react";

function State() {
// In the array message is the variable and is the part which the user see's. setMessage is the function which changes the variable.
// After the React.useState, this may change depending if the output is an array, string/empty string or integer.
  const [message, setMessage] = React.useState("");
//   const [error, setError] = React.useState("")
  return (
    <div>
      <h1>{message}</h1>
      <button
        onClick={() => {
          setMessage("clicked");
        }}
      >
        Button
      </button>
      <button
      onClick = {() => {
          setMessage("Click");
        //   setError ("")

      }}
      >
    Reset 
      </button>
    
      <button 
      onClick = {()=> {
     setMessage("You are not going to get through")
    //  setError ("Problem")

        }}>
        Click me  
      </button>
    </div>
  );
}

export default State;
