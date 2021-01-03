import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [addItem, setAddItem] = useState([]);

  function onChangeHandling(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function onClickHandling() {
    setAddItem((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input value={inputText} onChange={onChangeHandling} type="text" />
        <button onClick={onClickHandling}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {addItem.map((todoItem) => {
            return <li>{todoItem}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
