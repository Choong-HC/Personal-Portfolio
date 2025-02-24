import "./NavbarStyles.css";
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [color, setColor] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => setClick(!click);

  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return () => window.removeEventListener("scroll", changeColor);
  }, []);

  const handleScrollToSection = (event, sectionId, page) => {
    event.preventDefault();

    if (location.pathname === page) {
      // If already on the page, smoothly scroll to the section
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to the page first, then scroll after a short delay
      navigate(page);
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 500);
    }

    // Close mobile menu after clicking
    setClick(false);
  };

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1>Portfolio</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/" onClick={(e) => handleScrollToSection(e, "home", "/")}>Home</Link>
        </li>
        <li>
          <a href="/about#heroImg2" onClick={(e) => handleScrollToSection(e, "heroImg2", "/about")}>About</a>
        </li>
        <li>
          <a href="/about#myProject" onClick={(e) => handleScrollToSection(e, "myProject", "/about")}>Project</a>
        </li>
        <li>
        <a href="/about#Footer" onClick={(e) => handleScrollToSection(e, "Footer", "/about")}>Footer</a>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? <FaTimes size={20} style={{ color: "#fff" }} /> : <FaBars size={20} style={{ color: "#fff" }} />}
      </div>
    </div>
  );
};

export default Navbar;
