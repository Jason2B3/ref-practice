import { useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
  const firstNameRef = useRef();
  const lastNameRef = useRef();

  const submitHandler = function (e) {
    e.preventDefault();
    let firstNameInput = firstNameRef.current.value;
    let lastNameInput = lastNameRef.current.value;
    console.log(`first name input is... ${firstNameInput}`);
    console.log(`last name input is ... ${lastNameInput}`);
    // Clear the input fields 
    firstNameRef.current.value = "";
    lastNameRef.current.value = "";
  };
  return (
    <>
      <input type="text" ref={firstNameRef} />
      <input type="text" ref={lastNameRef} />
      <button onClick={submitHandler}>Submit</button>
    </>
  );
}

export default App;
