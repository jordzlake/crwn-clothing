import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import React from "react";
import ShopPage from "./pages/shoppage/shop.component";

import HomePage from "./pages/homepage/homepage.component";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/shop" component={ShopPage} />
    </Switch>
  );
}

export default App;
