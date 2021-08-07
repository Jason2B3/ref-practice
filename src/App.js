import { useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const prevNameRef = useRef("nothing");
  useEffect(() => {
    prevNameRef.current = name;
  }, [name]);
  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <h3>My name is currently: [{name}]</h3>
      <h3>My name was [{prevNameRef.current}] directly before that</h3>
    </>
  );
}

export default App;
