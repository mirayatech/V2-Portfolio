import React from "react";
import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="nav">
      <NavLink
        className="nav__link"
        style={({ isActive }) =>
          isActive
            ? {
                color: "#fff",
                borderTop: "3px solid #a7dcff",
                backgroundColor: "#212121",
              }
            : { color: "#b2b2b2" }
        }
        to="/"
      >
        _hello
      </NavLink>
      <NavLink
        className="nav__link"
        style={({ isActive }) =>
          isActive
            ? {
                color: "#fff",
                borderTop: "3px solid #a7dcff",
                backgroundColor: "#212121",
              }
            : { color: "#b2b2b2" }
        }
        to="/about"
      >
        _about me
      </NavLink>
      <NavLink
        className="nav__link"
        style={({ isActive }) =>
          isActive
            ? {
                color: "#fff",
                borderTop: "3px solid #a7dcff",
                backgroundColor: "#212121",
              }
            : { color: "#b2b2b2" }
        }
        to="/projects"
      >
        _projects
      </NavLink>
    </nav>
  );
}
