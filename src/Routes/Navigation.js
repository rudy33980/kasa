import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/Home">
          <li>Home</li>
        </NavLink>
        <NavLink to="/Apropos">
          <li>Apropos</li>
        </NavLink>
        <NavLink to="*">
          <li>Erreur 404</li>
        </NavLink>
      </ul>
    </div>
  );
}
