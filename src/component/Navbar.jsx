import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  FaUserCircle,
  FaSignInAlt,
  FaUserPlus,
  FaUser,
  FaSignOutAlt,
  FaHeart, FaShoppingCart, FaHistory
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  return (
    <nav
      className="navbar navbar-expand-lg top-0 w-100 d-flex flex-column align-items-center"
      style={{
        backgroundColor: "#4a281a",
           // #89AC46
        height: "auto",
        zIndex: "1000",
        padding: "10px 0",
      }}
    >
      <div className="container-fluid text-center">
        <Link className="navbar-brand text-white fw-bold" to="/">
          Jewellery Shop
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${
            isMenuOpen ? "show" : ""
          } text-center`}
          style={{ backgroundColor: "#4a281a" }}
        >
          <ul className="navbar-nav mx-auto text-center">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle text-white"
                to="/Category"
                id="propertyDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                All Jewellery
              </Link>
              <ul className="dropdown-menu ">
                <li>
                  <Link className="dropdown-item" to="/Product">
                    Silver
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/SiglePro">
                    Diamond
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="">
                    Gold
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/Aboutas">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/Contactas">
                Contact Us
              </Link>
            </li>
          </ul>

         {/* User Icon with Dropdown */}
<div className="dropdown position-relative">
  <button
    className="btn text-white fs-4 dropdown-toggle"
    type="button"
    id="userDropdown"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    <FaUserCircle />
  </button>
  <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
    <li>
      <Link className="dropdown-item d-flex align-items-center" to="/Login">
        <FaSignInAlt className="me-2 text-primary" /> Login
      </Link>
    </li>
    <li>
      <Link className="dropdown-item d-flex align-items-center" to="/Registor">
        <FaUserPlus className="me-2 text-success" /> Signup
      </Link>
    </li>
    <li>
      <Link className="dropdown-item d-flex align-items-center" to="/Account">
        <FaUser className="me-2 text-info" /> Account
      </Link>
    </li>
    <li>
      <Link className="dropdown-item d-flex align-items-center" to="/Wishlist">
        <FaHeart className="me-2 text-danger" /> Wishlist
      </Link>
    </li>
    <li>
      <Link className="dropdown-item d-flex align-items-center" to="/Cart">
        <FaShoppingCart className="me-2 text-primary" /> Cart
      </Link>
    </li>
    <li>
      <Link className="dropdown-item d-flex align-items-center" to="/OrderHistory">
        <FaHistory className="me-2 text-warning" /> Order History
      </Link>
    </li>
    <li>
      <Link className="dropdown-item text-danger d-flex align-items-center" to="/logout">
        <FaSignOutAlt className="me-2" /> Logout
      </Link>
    </li>
  </ul>
</div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
