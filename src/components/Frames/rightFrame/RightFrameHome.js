import React from "react";
import { Route, Switch } from "react-router-dom";
import s from "./rightFrame.module.scss";

//contents
import Home from "../contents/right_frame/home/Home";
import Contact from "../contents/right_frame/contact/Contact";
import Projects from "../contents/right_frame/Projects";
import About from "../contents/right_frame/About";

export default function RightFrameHome() {
  return (
    <div className={s.RightFrame}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/About" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
      </Switch>
    </div>
  );
}
