"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav id="navbar">
        <a href="#home" className="nav-logo" onClick={closeMenu}>
          <div>
            <div className="nav-logo-text">YO!</div>
            <div className="nav-logo-sub">Fitness</div>
          </div>
        </a>

        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#trainers">Trainers</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#book">Contact</a></li>
        </ul>

        <a href="#book" className="nav-cta">Book Trial</a>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#services" onClick={closeMenu}>Services</a>
        <a href="#pricing" onClick={closeMenu}>Pricing</a>
        <a href="#trainers" onClick={closeMenu}>Trainers</a>
        <a href="#gallery" onClick={closeMenu}>Gallery</a>
        <a href="#book" onClick={closeMenu}>Book Trial</a>
      </div>
    </>
  );
}