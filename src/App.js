import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Body from "./components/body/Body";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
        <NavBar />
      </div>

      <Body />
    </Router>
  );
}

export default App;
