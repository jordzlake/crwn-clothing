import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import React from "react";

import HomePage from "./pages/homepage/homepage.component";

const HatsPage = (props) => (
  <div>
    <button onClick={() => props.history.push("/")}>Home</button>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/hats" component={HatsPage} />
    </div>
  );
}

export default App;
