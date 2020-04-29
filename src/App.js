import React from "react";
import "./App.css";
import State from "./components/state";

// creating reusuable components



function main() {
 //another way of doing an onClick but using const as a function
  const radhikaClicked = () => {
    console.log("Radhika Clicked");
  };
  return (

    <div>
      <State />
      <Counter />
      <PeopleInfo
        name="Radhika"
        age="20"
        company="Publicis Sapient"
        onClick={radhikaClicked}
      />
      <hr />
      <PeopleInfo
        name="Imah"
        age="20"
        company="publicis sapient"
        // creating an onClick when clicking on Imah
        onClick={() => {
          console.log("hi");
        }}
      />
      



    </div>
  );
  function PeopleInfo(props) {
    return (
      <div
        // if onClick is not in a button, p, h1 you need to define in the function
        onClick={props.onClick}
      >
        <p> Name = {props.name} </p>
        <p> Age = {props.age} </p>
        <p> Company = {props.company} </p>
      </div>
    );
  }
}
// using state, to then create a counter 
function Counter () {
  const[count, setCount] = React.useState(0);
    
    return(
      <div className = "button">
      <p><b>Your Points:</b> {count}</p>
      <button onClick ={()=>{setCount(count+1)}} />
     
      <button onClick ={()=>{setCount(count-1)}} />
      </div>
    )  
  }
  
 


// onClicks functions

export default main;
