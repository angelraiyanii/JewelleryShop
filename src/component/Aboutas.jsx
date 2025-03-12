import React, { Component } from "react";
import aboutBanner from "./images/about.png";
import a1 from "./images/aboutpage.png";

import img1 from "./images/category1.png";
import img2 from "./images/category2.png";
import "../App.css";

export class Aboutas extends Component {
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
                alt="Jewellery"
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
                alt="Jewellery"
                className="img-fluid rounded about-img"
              />
            </div>
          </div>
        </div>

        <hr className="p-2" />

        {/* About manager - Responsive Cards */}
        <div className="container">
          <div className="row">
              {/* First Card */}
            <div className="col-md-3 col-sm-12 mb-8">
              <div className="card news-card">
                <img
                  src={a1}
                  alt="News"
                  className="card-img-top img-fluid"
                  style={{ height: "140px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Kalyan Jewellers launches its 200th showroom globally at
                    Jammu
                  </h5>
                  <p className="card-text">
                    <strong>August 20, 2023:</strong> Kalyan Jewellers, one of
                    India’s largest and most-trusted jewellery brands today
                    announced the launch of its 1st ...
                  </p>
                  <a href="#" className="read-more">
                    read more
                  </a>
                </div>
              </div>
            </div>

              {/* Second Card */}
            <div className="col-md-3 col-sm-12 mb-8">
              <div className="card news-card">
                <img
                  src={a1}
                  alt="News"
                  className="card-img-top img-fluid"
                  style={{ height: "140px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Kalyan Jewellers launches its 200th showroom globally at
                    Jammu
                  </h5>
                  <p className="card-text">
                    <strong>August 20, 2023:</strong> Kalyan Jewellers, one of
                    India’s largest and most-trusted jewellery brands today
                    announced the launch of its 1st ...
                  </p>
                  <a href="#" className="read-more">
                    read more
                  </a>
                </div>
              </div>
            </div>
            {/* Third Card */}
            <div className="col-md-3 col-sm-12 mb-8">
          
              <div className="card news-card">
                <img
                  src={a1}
                  alt="News"
                  className="card-img-top img-fluid"
                  style={{ height: "140px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Kalyan Jewellers launches its 200th showroom globally at
                    Jammu
                  </h5>
                  <p className="card-text">
                    <strong>August 20, 2023:</strong> Kalyan Jewellers, one of
                    India’s largest and most-trusted jewellery brands today
                    announced the launch of its 1st ...
                  </p>
                  <a href="#" className="read-more">
                    read more
                  </a>
                </div>
              </div>
            </div>
              {/* 4 Card */}
              <div className="col-md-3 col-sm-12 mb-8">
              <div className="card news-card">
                <img
                  src={a1}
                  alt="News"
                  className="card-img-top img-fluid"
                  style={{ height: "140px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Kalyan Jewellers launches its 200th showroom globally at
                    Jammu
                  </h5>
                  <p className="card-text">
                    <strong>August 20, 2023:</strong> Kalyan Jewellers, one of
                    India’s largest and most-trusted jewellery brands today
                    announced the launch of its 1st ...
                  </p>
                  <a href="#" className="read-more">
                    read more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Aboutas;
