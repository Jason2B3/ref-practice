import React, { useRef } from "react";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  //$ Step 1: Create a ref and pass it as an att for <Counter>
  const ref = useRef();
  //$ STEP 4: Use the forwarded function in a handler here, then use it for <button onClick>
  const buttonHandler = () => ref.current.incrementFN();

  return (
    <>
      <Counter ref={ref} />       {/*Passed as a ref */}
      <button onClick={buttonHandler}>Regular Button (+1)</button>
    </>
  );
}

export default App;
