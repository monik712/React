import React from "react";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Welcome to React</h1>

      <p className={styles.paragraph}>
        This component is styled using CSS Modules.
      </p>

      <button className={styles.button}>Click Me</button>
    </div>
  );
}

export default App;