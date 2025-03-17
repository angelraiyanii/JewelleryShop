import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCreditCard } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaAd } from "react-icons/fa";
import {
  FaUserCircle,
  FaSignInAlt,
  FaUserPlus,
  FaUser,
  FaSignOutAlt,
  FaHeart,
  FaShoppingCart,
  FaHistory,
  FaList,
  FaBox,
  FaShoppingBag,
  FaPhone,
  FaInfoCircle,
  FaTags,
} from "react-icons/fa";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false); // State for showing Admin menu item

  return (
    <nav
      className="navbar navbar-expand-lg top-0 w-100 d-flex flex-column align-items-center"
      style={{
        backgroundColor: "#4a281a",
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
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/Product">
                    Silver
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
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
              <Link className="nav-link text-white" to="/Aboutus">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/Contactus">
                Contact Us
              </Link>
            </li>

            {/*  Show Admin only when showAdmin state is true */}
            {showAdmin && (
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle text-white"
                  to="#"
                  id="adminDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Admin
                </Link>

                <ul className="dropdown-menu" aria-labelledby="adminDropdown">
                  <li>
                    <Link
                      className="dropdown-item d-flex align-items-center"
                      to="./Admin/AdCategory"
                    >
                      <FaList className="me-2 text-primary" /> Category
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item d-flex align-items-center"
                      to="./Admin/AdPro"
                    >
                      <FaBox className="me-2 text-success" /> Product
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item d-flex align-items-center"
                      to="./Admin/AdUser"
                    >
                      <FaUser className="me-2 text-info" /> User
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item d-flex align-items-center"
                      to="./Admin/AdOrder"
                    >
                      <FaShoppingBag className="me-2 text-warning" /> Order
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item d-flex align-items-center"
                      to="./Admin/AdOffers"
                    >
                      <FaTags className="me-2 text-primary" /> Offers
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item d-flex align-items-center"
                      to="./Admin/AdReviews"
                    >
                      <FaStar className="me-2 text-success" /> Reviews
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item d-flex align-items-center"
                      to="./Admin/AdBanner"
                    >
                      <FaAd className="me-2 text-info" /> Banners
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item d-flex align-items-center"
                      to="./Admin/AdContact"
                    >
                      <FaPhone className="me-2 text-danger" /> Contact
                    </Link>
                  </li>
                  {/* <li>
                    <Link
                      className="dropdown-item d-flex align-items-center"
                      to="/Cart"
                    >
                      <FaShoppingCart className="me-2 text-primary" /> Cart
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item d-flex align-items-center"
                      to="/Wishlist"
                    >
                      <FaHeart className="me-2 text-danger" /> Wishlist
                    </Link>
                  </li> */}
                  <li>
                    <Link
                      className="dropdown-item d-flex align-items-center"
                      to="./Admin/AdAbout"
                    >
                      <FaInfoCircle className="me-2 text-secondary" /> About Us
                    </Link>
                  </li>
                </ul>
              </li>
            )}
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
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="userDropdown"
            >
              <li>
                <Link
                  className="dropdown-item d-flex align-items-center"
                  to="/Login"
                >
                  <FaSignInAlt className="me-2 text-primary" /> Login
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item d-flex align-items-center"
                  to="/Registor"
                >
                  <FaUserPlus className="me-2 text-success" /> Signup
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item d-flex align-items-center"
                  to="/Account"
                >
                  <FaUser className="me-2 text-info" /> Account
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item d-flex align-items-center"
                  to="/Wishlist"
                >
                  <FaHeart className="me-2 text-danger" /> Wishlist
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item d-flex align-items-center"
                  to="/Cart"
                >
                  <FaShoppingCart className="me-2 text-primary" /> Cart
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item d-flex align-items-center"
                  to="/Checkout"
                >
                  <FaCreditCard className="me-2 text-danger" /> Checkout
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item d-flex align-items-center"
                  to="/OrderHistory"
                >
                  <FaHistory className="me-2 text-warning" /> Order History
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item text-danger d-flex align-items-center"
                  to="/logout"
                >
                  <FaSignOutAlt className="me-2" /> Logout
                </Link>
              </li>

              {/* ✅ Admin Toggle Menu Item */}
              <li onClick={() => setShowAdmin(!showAdmin)}>
                <button
                  className="dropdown-item d-flex align-items-center"
                  type="button"
                >
                  <FaUser className="me-2 text-primary" /> Admin
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
