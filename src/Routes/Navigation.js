import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/Home">
          <li>Home</li>
        </NavLink>
        <NavLink to="/logements">
          <li>Logements</li>
        </NavLink>
        <NavLink to="/equipementLog">
          <li>EquipementLog</li>
        </NavLink>
        <NavLink to="/Apropos">
          <li>Profil</li>
        </NavLink>
        <NavLink to="/D_404">
          <li>Erreur 404</li>
        </NavLink>
      </ul>
    </div>
  );
}
