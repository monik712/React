import React, { useState, useMemo } from "react";

function App() {
  const [number, setNumber] = useState(1);
  const [count, setCount] = useState(0);

  // Expensive calculation
  const square = useMemo(() => {
    console.log("Calculating Square...");
    return number * number;
  }, [number]);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>useMemo Example</h2>

      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />

      <h3>Square: {square}</h3>

      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
    </div>
  );
}

export default App;