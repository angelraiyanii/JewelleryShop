import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import bg from "./Images/bg.png";
import { Link } from "react-router-dom";
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = (data) => {
    let errors = {};

    // Email Validation
    if (!data.email) {
      errors.email = "Email is required.";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(data.email)) {
      errors.email = "Invalid email format.";
    }

    // Password Validation
    if (!data.password) {
      errors.password = "Password is required.";
    } else if (data.password.length < 6) {
      errors.password = "Password must be at least 6 characters long.";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form Data Submitted:", formData);
      alert("Form submitted successfully!");
      setFormData({
        email: "",
        password: "",
      });
      setErrors({});
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center "
      style={{
        backgroundImage: `url(${bg})`,

        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "500px",
      }}
    >
      <div
        className="card shadow-lg p-4"
        style={{ width: "350px", background: "rgba(197, 180, 143, 0.9)" }}
      >
        <h3 className="text-center mb-4">Login Now</h3>
        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-bold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`form-control form-control-sm ${
                errors.email ? "is-invalid" : ""
              }`}
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email}</div>
            )}
          </div>

          {/* Password */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-bold">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className={`form-control form-control-sm ${
                errors.password ? "is-invalid" : ""
              }`}
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
            {errors.password && (
              <div className="invalid-feedback">{errors.password}</div>
            )}
          </div>
          {/* Forgot Password */}
          <p className="text-center mt-3">
            <Link to="/ForgotPassword">
              <a>Forgot Password?</a>
            </Link>
          </p>
          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-primary w-50 d-block mx-auto"
          >
            Submit
          </button>
          {/* Register Now */}
          <p className="text-center mt-3">
            Don't have an account?{" "}
            <Link to="/Registor">
              <a className="text-danger">Register Now</a>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
