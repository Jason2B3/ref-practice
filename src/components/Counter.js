import React, { useState, forwardRef, useImperativeHandle } from "react";

function Counter(props, ref) {
  // Set up the stateful count vriable and define the increment ƒ()
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);

  //$ STEP 2: Pass an object back to the parent component
  useImperativeHandle(ref, () => ({
    // The object contains variables and components we want to share
    incrementFN: increment, // renamed the function (optional)
  }));

  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Custom Button (+1)</button>
    </>
  );
}
//$ STEP 3: Forward ref this entire function (see how in lesson)
const forwardedCounter = React.forwardRef(Counter);
export default forwardedCounter;
