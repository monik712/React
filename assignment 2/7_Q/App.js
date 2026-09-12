import React, { Suspense } from "react";

const Home = React.lazy(() => import("./Home"));

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>React Lazy Loading Example</h1>

      <Suspense fallback={<h3>Loading Component...</h3>}>
        <Home />
      </Suspense>
    </div>
  );
}

export default App;