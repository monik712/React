import React from "react";

function App() {
  return (
    <div
      style={{
        backgroundColor: "lightblue",
        padding: "20px",
        textAlign: "center",
        borderRadius: "10px",
      }}
    >
      <h1 style={{ color: "darkblue" }}>Welcome to React</h1>

      <p style={{ fontSize: "18px", color: "black" }}>
        This component is styled using Inline CSS.
      </p>

      <button
        style={{
          backgroundColor: "blue",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Click Me
      </button>
    </div>
  );
}

export default App;