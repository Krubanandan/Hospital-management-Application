import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <nav className="container">
      <div className="logo">
        <img src="/logo.png" alt="logo" className="logo-img" />
      </div>
      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className="links">
          <Link to="/" onClick={() => setShow(false)}>Home</Link>
          <Link to="/appointment" onClick={() => setShow(false)}>Appointment</Link>
          <Link to="/about" onClick={() => setShow(false)}>About Us</Link>
        </div>
        <Link to="/login" className="loginBtn btn" onClick={() => setShow(false)}>
          LOGIN
        </Link>
      </div>
      <div className="hamburger" onClick={() => setShow(!show)}>
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
