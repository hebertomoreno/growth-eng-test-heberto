import React from "react";
import Results from "./components/Results";
import "./assets/styles/App.scss";

const App = (): JSX.Element => {
  return (
    <div className="App">
      <h1>Employer Tax Calculator</h1>
      <Results />
    </div>
  );
};

export default App;
