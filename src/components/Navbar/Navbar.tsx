import { NavLink } from "react-router-dom";
import "/src/styles/Navbar.css";

export function Navbar() {
  return (
    <nav className="nav">
      <NavLink
        className="nav__link"
        style={({ isActive }) =>
          isActive
            ? {
                color: "#fff",
                borderTop: "3px solid #6E7CD4",
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
                borderTop: "3px solid #6E7CD4",
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
                borderTop: "3px solid #6E7CD4",
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
