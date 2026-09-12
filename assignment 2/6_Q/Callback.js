import React, { useState, useCallback } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // Function is recreated only when count changes
  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>useCallback Example</h2>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p>Name: {name}</p>

      <h3>Count: {count}</h3>

      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default App;