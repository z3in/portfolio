import React from "react";
import { Route, Switch } from "react-router-dom";

//contents
import Home from "./contents/Home";
import Contact from "./contents/Contact";
import Projects from "./contents/Projects";

export default function RightFrameHome() {
  return (
    <div className="Right-Frame">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
      </Switch>
    </div>
  );
}
