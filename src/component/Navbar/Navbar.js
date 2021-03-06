import React, { useContext } from "react";
import "../Navbar/Navbar.style.css";
import { ThemeContext } from "../../context/themeContext";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  const { dark, isLightTheme, light } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <nav className="nav" style={{ background: theme.ui, color: theme.syntax }}>
      <h1>Context App</h1>
      <div className="row" onClick={toggleAuth}>
        {isAuthenticated ? "Logged In" : "Logged Out"}
      </div>
      <ul>
        <li style={{ background: theme.bg }}>Home</li>
        <li style={{ background: theme.bg }}>About</li>
        <li style={{ background: theme.bg }}>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
