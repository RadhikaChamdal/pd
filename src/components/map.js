import React from "react";

function Shopping() {
  const [addItem, setAddItem] = React.useState("Shopping");
  const [shoppingList, setShoppingList] = React.useState([
    "milk",
    "eggs",
    "beans",
  ]);
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
    </div>
  );
}


export default Shopping
