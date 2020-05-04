import React from "react";
import NavBar from "./components/NavBar";
import Body from "./components/Body";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Body />
      <Route path="/"></Route>
    </Router>
  );
}

export default App;
