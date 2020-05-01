import React from "react";

function Effect() {
  // useEffect will only run once and display once, this is useful when working with API's as you wouldnt want the api running
  // everytime the app is ran.

  const [stateOne, setStateOne] = React.useState(false);
  const [stateTwo, setStateTwo] = React.useState(false);

  React.useEffect(() => {
    console.log("StateOne");
  }, [stateOne]);
  // Takes the useEffect which is ran every single time the app is ran using the [] forms a dependency array which then only runs once.

  // useState is set at false, because whent the code runs we are looking at the once the button is clickecd on.
  // Every time state changes the app gets runs again.
  React.useEffect(() => {
    console.log("StateTwo");
  }, [stateTwo]);

  React.useEffect(() => {
    console.log("Hello");
  });
  React.useEffect(() => {
    console.log("Once");
  }, []);
  React.useEffect(() => {
    console.log("Radhika");
  }, [stateOne, stateTwo]);

  return (
    <div>
      <button onClick={() => setStateOne(!stateOne)}>button 1</button>
      <button onClick={() => setStateTwo(!stateTwo)}>button 2</button>
    </div>
  );
}

export default Effect;
