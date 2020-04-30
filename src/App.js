import React from "react";
import "./App.css";
import State from "./components/state";
import Input from './components/input';

// creating reusuable components

function main() {
  //another way of doing an onClick but using const as a function
  const radhikaClicked = () => {
    console.log("Radhika Clicked");
  };
  return (
    <div>
      {/*Calling the function from below into the function State and Counter */}
      <State />
      <hr />
      <Counter />
      <hr />
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
      <hr />
      {/* Calling the function from below on reusable components and state */}
      <Person name="Radhika" />
      <hr />
    <Input />
    
    
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
function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <div className="button">
      <p>
        <b>Your Points:</b> {count}
      </p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {" "}
        Correct{" "}
      </button>

      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        {/* {" "} */}
        Incorrect{" "}
      </button>
    </div>
  );
}

// Creating a reusable component using state management
function Person(props) {
  const [currentName, setCurrentName] = React.useState(props.name);
  return (
    // Once user clicks on the name, name will change to Chamdal
    <div
      onClick={() => {
        setCurrentName("Chamdal");
      }}
    >
      <p> Name = {currentName}</p>
    </div>
  );
}

export default main;
