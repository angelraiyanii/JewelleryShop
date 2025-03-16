import React, { useState } from "react";
import aboutBanner from "../images/about.png";
import a1 from "../images/aboutpage.png";

import img1 from "../images/category1.png";
import img2 from "../images/category2.png";
import "../../App.css";

const AdAbout = () => {
  // State for content and image
  const [aboutContent, setAboutContent] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [errors, setErrors] = useState({});

  // Handle text change
  const handleContentChange = (e) => {
    setAboutContent(e.target.value);
    setErrors({ ...errors, aboutContent: "" });
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      setErrors({ ...errors, selectedImage: "" });
    }
  };

  // Validation function
  const validateForm = () => {
    let tempErrors = {};
    if (!aboutContent.trim()) tempErrors.aboutContent = "Content is required.";
    if (!selectedImage) tempErrors.selectedImage = "Image is required.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Save function (Modify to send data to API or database)
  const handleSave = () => {
    if (validateForm()) {
      console.log("Saved Content:", aboutContent);
      console.log("Saved Image:", selectedImage);
      alert("Changes saved successfully!");
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">About Us</h2>

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

      {/* Image Upload */}
      <div className="mb-3 text-center">
        <label className="form-label">Upload Banner Image</label>
        <input
          type="file"
          className="form-control"
          onChange={handleImageUpload}
        />
        {errors.selectedImage && (
          <small className="text-danger">{errors.selectedImage}</small>
        )}
        {selectedImage && (
          <img
            src={selectedImage}
            alt="Uploaded"
            className="img-fluid mt-3 rounded"
            style={{ maxWidth: "100%", height: "300px", objectFit: "cover" }}
          />
        )}
      </div>

      {/* Editable Text Area */}
      <div className="mb-3">
        <label className="form-label">Edit About Page Content</label>
        <textarea
          className="form-control"
          rows="5"
          value={aboutContent}
          onChange={handleContentChange}
        ></textarea>
        {errors.aboutContent && (
          <small className="text-danger">{errors.aboutContent}</small>
        )}
      </div>

      {/* Save Button */}
      <button className="btn btn-primary" onClick={handleSave}>
        Save Changes
      </button>
    </div>
  );
};

export default AdAbout;
