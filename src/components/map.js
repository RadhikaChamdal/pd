import React from "react";

function Shopping() {
  const [addItem, setAddItem] = React.useState("Shopping");
  const [shoppingList, setShoppingList] = React.useState([
    "milk",
    "eggs",
    "beans",
  ]);

// used map function to change the whole array, you isolate the string or whatever in a 
// seperate function then use the map function with another function to then display a change.
  const putinLi = (string) => {
      return <li>{string}</li>
  }

const List = shoppingList.map(putinLi)

  
const handleClick = () => {
    setAddItem("")
    // [...]is the spread operator, copies the existing array and adds the new input.
    // keep the state the same as the data type, e.g. the whole code is in an array format
    // below shows the current array adding another array
    setShoppingList(prevList => [...prevList, addItem]);
}
  return (
    <div>
      <p></p>
      <input
        onChange={(event) => {
          setAddItem(event.target.value);
        }}
        value={addItem}
      />

      <button onClick={handleClick}> Add to list </button>
      <hr />
      <p>In my list:{shoppingList.join(" ,")}</p>
      <ol>
          {List}
        </ol>
    </div>
  );
}


export default Shopping
