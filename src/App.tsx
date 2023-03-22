/** @format */

import React, { useState } from "react";

import "./App.css";
import Memo from "./components/Memo";

function App() {
  const [obj, setObj] = useState({ name: "", age: 0 });

  console.log("Parent excute");

  return (
    <div className="App">
      <header></header>
      <main>
        <h1>Name {obj.name}</h1>
        <h1>Age {obj.age}</h1>
        <button
          onClick={() => {
            console.log("change");
            const newProp = { name: "nhat", age: 28 };
            setObj(newProp);
          }}
        >
          Click Change
        </button>{" "}
        <button
          onClick={() => {
            console.log("change 2");
            const newProp = {...obj}
            newProp.age= 100
            setObj(newProp);
          }}
        >
          Click Change 2
        </button>
        <Memo obj={obj} />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
