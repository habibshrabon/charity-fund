import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header container">
      <h1 className="fw-bold pt-5">CHARITY FUND</h1>
      <h4>Our Donate Persons Here</h4>
      <h2 className="mb-5">Total Fund Collection Targets Are $1000 Milions</h2>
      <nav className="mb-5">
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact Us</a>
      </nav>
    </div>
  );
};

export default Header;
