import React from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../resources/img/icon2.png";

export default function NavBar() {
  const ActiveLink = { color: "#FFD000", borderBottom: "1px solid #FFD000" };
  return (
    <nav>
      <div className="Nav-Logo">
        <Link to="/">
          <img src={Logo} width="100px" alt="logo" />
        </Link>
      </div>
      <div className="Nav-Links">
        <NavLink to="/home" activeStyle={ActiveLink}>
          HOME
        </NavLink>
        <NavLink to="/contact" activeStyle={ActiveLink}>
          CONTACT
        </NavLink>
        <NavLink to="/projects" activeStyle={ActiveLink}>
          PROJECTS
        </NavLink>
      </div>
    </nav>
  );
}
