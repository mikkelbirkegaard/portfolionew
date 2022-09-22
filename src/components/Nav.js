import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import "../Navbar.css";
import "../App.css";
import Instaicon from "../assets/insta.png";
import Linkedin from "../assets/linkedin.png";
import Github from "../assets/github.png";
import Logo from "../assets/mikkellogo.png";
import { HashLink as Link } from "react-router-hash-link";

export default function Navbar() {
  const [isNav, setIsNav] = useState(false);
  return (
    <header>
      <nav id="forside" className="navbar">
        <NavLink to="/">
          <img className="logo" src={Logo} alt="Mikkel Portfolio logo" />
        </NavLink>

        <ul
          className={isNav ? "navlinks-mobile" : "navlinks"}
          onClick={() => setIsNav(false)}
        >
          <Link to="/#scrollto" offset={50} duration={500} className="projects">
            <li>Projekter</li>
          </Link>
          <span aria-hidden="true" className="between-menu">
            /
          </span>
          <NavLink to="/about" className="about">
            <li>Om Mig</li>
          </NavLink>
          <span aria-hidden="true" className="between-menu">
            /
          </span>
          <NavLink to="/contact" className="contact">
            <li>Kontakt</li>
          </NavLink>
        </ul>

        <div
          className={isNav ? "social-mobile" : "sociallinks"}
          onClick={() => setIsNav(false)}
        >
          <a href="https://www.linkedin.com/in/mikkel-b-973913128/">
            <img className="social insta" src={Linkedin} alt="Linkedin" />
          </a>
          <a href="https://github.com/mikkelbirkegaard">
            <img className="social insta" src={Github} alt="Github" />
          </a>
          <a href="https://www.instagram.com/mikkelbirkegaard/">
            <img className="social insta" src={Instaicon} alt="Instagram" />
          </a>
        </div>
        <button className="mobile-toggle-icon" onClick={() => setIsNav(!isNav)}>
          {isNav ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </button>
      </nav>
    </header>
  );
}
