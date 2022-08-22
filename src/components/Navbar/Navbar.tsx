import { Link } from "react-router-dom";
import "/src/styles/Navbar.css";

export function Navbar() {
  return (
    <nav className="nav">
      <Link className="nav__link" to="/">
        _hello
      </Link>
      <Link className="nav__link" to="/about">
        _about me
      </Link>
      <Link className="nav__link" to="/projects">
        _projects
      </Link>
    </nav>
  );
}
