import { useState, useRef, useEffect } from "react";
import "./App.css";
import MyInput from "./components/MyInput";

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
      <MyInput type="text" ref={firstNameRef} placeholder={'type first name here'} />

      <input type="text" ref={lastNameRef} />
      <button onClick={submitHandler}>Submit</button>
    </>
  );
}

export default App;
