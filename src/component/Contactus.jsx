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

class Contactus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      message: "",
      errors: {},
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  validateForm = () => {
    let errors = {};

    if (!this.state.name) errors.name = "Full name is required.";
    else if (this.state.name.length < 3)
      errors.name = "Full name must be at least 3 characters.";

    if (!this.state.email) errors.email = "Email is required.";
    else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(this.state.email))
      errors.email = "Invalid email format.";

    if (!this.state.phone) errors.phone = "Phone number is required.";
    else if (!/^\d{10}$/.test(this.state.phone))
      errors.phone = "Enter a valid 10-digit phone number.";

    if (!this.state.message) errors.message = "Message cannot be empty.";
    else if (this.state.message.length < 10)
      errors.message = "Message must be at least 10 characters long.";

    return errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validateForm();
    this.setState({ errors });

    if (Object.keys(errors).length === 0) {
      console.log("Form Data Submitted:", this.state);
      alert("Thank you for contacting us! We will get back to you soon.");
      this.setState({
        name: "",
        email: "",
        phone: "",
        message: "",
        errors: {},
      });
    }
  };

  render() {
    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6">
            <img
              src={contactimg}
              alt="Beautiful Jewellery"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-6">
            <div className="card shadow-lg p-4">
              <h2 className="text-center mb-4">Contact Us</h2>
              <form onSubmit={this.handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    className={`form-control ${
                      this.state.errors.name ? "is-invalid" : ""
                    }`}
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                  {this.state.errors.name && (
                    <div className="invalid-feedback">
                      {this.state.errors.name}
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    className={`form-control ${
                      this.state.errors.email ? "is-invalid" : ""
                    }`}
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                  {this.state.errors.email && (
                    <div className="invalid-feedback">
                      {this.state.errors.email}
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    className={`form-control ${
                      this.state.errors.phone ? "is-invalid" : ""
                    }`}
                    name="phone"
                    value={this.state.phone}
                    onChange={this.handleChange}
                  />
                  {this.state.errors.phone && (
                    <div className="invalid-feedback">
                      {this.state.errors.phone}
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea
                    className={`form-control ${
                      this.state.errors.message ? "is-invalid" : ""
                    }`}
                    rows="4"
                    name="message"
                    value={this.state.message}
                    onChange={this.handleChange}
                  ></textarea>
                  {this.state.errors.message && (
                    <div className="invalid-feedback">
                      {this.state.errors.message}
                    </div>
                  )}
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
    );
  }
}

export default Contactus;
