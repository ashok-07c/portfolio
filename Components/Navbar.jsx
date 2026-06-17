import logo from "/src/images/Logo.png";
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';

export default function Navbar() {
  const tabs = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <div className="nav-links">
        {tabs.map((tab) => {
          const path = tab === "Home" ? "/" : `/${tab.toLowerCase()}`;

          return (
            <NavLink
              key={tab}
              to={tab === "Home" ? "/" : `/${tab.toLowerCase()}`}
              className={({ isActive }) =>
                `nav-item ${isActive ? "active" : ""}`
              }
            >
              {tab}
            </NavLink>
          );
        })}
      </div>
        <Link to="/contact">
          <button className="hire-btn">Hire Me</button>
        </Link>
    </nav>
  );
}
