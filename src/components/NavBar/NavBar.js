import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../../assets/img/icon2.png";
import s from "./navbar.module.scss";

export default function NavBar() {
  const ActiveLink = { color: "#FFD000", borderBottom: "1px solid #FFD000" };
  const [toggle, setToggle] = useState(false);
  return (
    <nav>
      <div className={s.NavLogo}>
        <Link to="/" onClick={() => (toggle ? setToggle(false) : null)}>
          <img src={Logo} width="100px" alt="logo" />
        </Link>
      </div>
      <div className={toggle ? s.NavLinks + " " + s.active : s.NavLinks}>
        <NavLink
          to="/"
          exact
          onClick={() => setToggle(!toggle)}
          activeStyle={ActiveLink}
        >
          HOME
        </NavLink>
        <NavLink
          to="/about"
          activeStyle={ActiveLink}
          onClick={() => setToggle(!toggle)}
        >
          ABOUT ME
        </NavLink>
        <NavLink
          to="/contact"
          activeStyle={ActiveLink}
          onClick={() => setToggle(!toggle)}
        >
          CONTACT
        </NavLink>
        <NavLink
          to="/projects"
          activeStyle={ActiveLink}
          onClick={() => setToggle(!toggle)}
        >
          PROJECTS
        </NavLink>
      </div>
      <div className={s.Burger} onClick={() => setToggle(!toggle)}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
}
