import React, { Component } from "react";
import aboutBanner from "./images/about.png";
import a1 from "./images/aboutpage.png";

import img1 from "./images/category1.png";
import img2 from "./images/category2.png";
import "../App.css";

export class Aboutus extends Component {
  render() {
    return (
      <div className="about-container">
        {/* Full-width banner */}
        <div className="container-fluid px-0">
          <img
            src={aboutBanner}
            alt="About Us"
            className="d-block w-100 banner-img"
          />
        </div>

        {/* Two-column responsive layout */}
        <div className="container mt-5">
          <div className="row align-items-center">
            {/* Left Image */}
            <div className="col-md-6 text-center mb-4 mb-md-0">
              <img
                src={img1}
                height={300}
                alt="Jewellery"
                width={300}
                className="img-fluid rounded about-img"
              />
            </div>

            {/* Right Content */}
            <div className="col-md-6 text-center text-md-start">
              <h2 className="about-title">About Our Jewellery</h2>
              <p className="about-text">
                Discover timeless elegance with our exquisite jewellery
                collection. Crafted with passion, designed for beauty. Each
                piece tells a story of elegance and sophistication.
              </p>
            </div>
          </div>
        </div>
        {/* second info */}
        <div className="container mt-5">
          <div className="row align-items-center">
            {/* Right Content - Now on the left side */}
            <div className="col-lg-6 text-center text-lg-start">
              <h2 className="about-title">About Our Jewellery</h2>
              <p className="about-text">
                Discover timeless elegance with our exquisite jewellery
                collection. Crafted with passion, designed for beauty. Each
                piece tells a story of elegance and sophistication.
              </p>
            </div>

            {/* Left Image - Now on the right side */}
            <div className="col-lg-6 text-center">
              <img
                src={img2}
                height={300}
                alt="Jewellery"
                width={300}
                className="img-fluid rounded about-img"
              />
            </div>
          </div>
        </div>

        <hr className="p-2" />
      </div>
    );
  }
}

export default Aboutus;
