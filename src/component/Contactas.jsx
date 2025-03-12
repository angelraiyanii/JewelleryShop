import React, { Component } from "react";
import contactas from "./images/contactas.png";
import contactimg from "./images/bracelet.png"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

class Contactas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      message: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", this.state);
    alert("Thank you for contacting us! We will get back to you soon.");
    this.setState({ name: "", email: "", phone: "", message: "" });
  };

  render() {
    return (
      <>
        <div className="about-container">
          {/* Full-width banner */}
          <div className="container-fluid px-0">
            <img
              src={contactas}
              alt="About Us"
              className="d-block w-100 banner-img"
            />
          </div>

          {/* Contact Information Cards */}
          <div className="container my-5">
            <div className="row g-4">
              <div className="col-md-6 col-lg-3">
                <div className="contact-card p-3 text-center">
                  <FontAwesomeIcon icon={faPhone} className="contact-icon" />
                  <h5 className="mt-3">+91 2223334445</h5>
                  <p>Connect with us over a quick phone call.</p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3">
                <div className="contact-card p-3 text-center">
                  <FontAwesomeIcon icon={faWhatsapp} className="contact-icon" />
                  <h5 className="mt-3">WhatsApp Us</h5>
                  <p>Our 24x7 Shopping Assistant is just a text away.</p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3">
                <div className="contact-card p-3 text-center">
                  <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                  <h5 className="mt-3">jewelleryshop@gmail.com</h5>
                  <p>Your questions or feedback are always welcome.</p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3">
                <div className="contact-card p-3 text-center">
                  <FontAwesomeIcon
                    icon={faQuestionCircle}
                    className="contact-icon"
                  />
                  <h5 className="mt-3">FAQs</h5>
                  <p>Need an immediate answer? Check our FAQ section.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section with Image & Form */}
          <div className="container my-5">
            <div className="row">
              {/* Left Side - Jewellery Info */}
              <div className="col-md-6">
                <div className="jewellery-info p-4">
                  <img
                    src={contactimg}
                    height={350} 
                    alt="Beautiful Jewellery"
                    width={350}
                    className="img-fluid rounded shadow"
                  />
                  <h3 className="mt-4">Exquisite Jewellery Collections</h3>
                  <p>
                    Discover timeless elegance with our handcrafted jewellery
                    collections. Each piece is designed with passion and
                    precision, bringing luxury and charm to your style.
                  </p>
                  <p>
                    Visit our store or contact us for custom designs tailored
                    just for you.
                  </p>
                </div>
              </div>

              {/* Right Side - Contact Form */}
              <div className="col-md-6">
                <div className="card shadow-lg p-4">
                  <h2 className="text-center mb-4">Contact Us</h2>
                  <form onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                      <label className="form-label">Full Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Email Address</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Phone Number</label>
                      <input
                        type="tel"
                        className="form-control"
                        name="phone"
                        value={this.state.phone}
                        onChange={this.handleChange}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Message</label>
                      <textarea
                        className="form-control"
                        rows="4"
                        name="message"
                        value={this.state.message}
                        onChange={this.handleChange}
                        required
                      ></textarea>
                    </div>

                    <div className="text-center">
                      <button type="submit" className="btn btn-primary">
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Contactas;
