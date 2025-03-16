import React, { useState } from "react";
import s1 from "../images/slide1.png";
import s2 from "../images/slide2.png";
import s3 from "../images/slide3.png";
import "../../App.css";

const AdBanner = () => {
  const [banners, setBanners] = useState([
    { id: 1, name: "Homepage Banner", image:  s1 , status: "Active" },
    { id: 2, name: "Sale Banner", image:  s2 , status: "Active" },
    { id: 3, name: "New Arrival Banner", image:  s3 , status: "Inactive" },
  ]);

  const [selectedBanner, setSelectedBanner] = useState(null);
  const [showEditForm, setShowEditForm] = useState(false);
  const [newImage, setNewImage] = useState(null);
  const [errors, setErrors] = useState({});

  // Open Edit Form
  const handleEdit = (banner) => {
    setSelectedBanner(banner);
    setShowEditForm(true);
    setErrors({});
  };

  // Close Edit Form
  const handleClose = () => {
    setShowEditForm(false);
    setSelectedBanner(null);
    setNewImage(null);
  };

  // Handle Image Upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (
      file &&
      (file.type === "image/png" ||
        file.type === "image/jpeg" ||
        file.type === "image/jpg")
    ) {
      const imageUrl = URL.createObjectURL(file);
      setNewImage(imageUrl);
      setErrors({});
    } else {
      setErrors({ image: "Only JPG, JPEG, and PNG formats are allowed." });
    }
  };

  // Save Updated Banner
  const handleSave = (e) => {
    e.preventDefault();
    if (!newImage) {
      setErrors({ image: "Please select a new image." });
      return;
    }
    setBanners(
      banners.map((banner) =>
        banner.id === selectedBanner.id
          ? { ...banner, image: newImage }
          : banner
      )
    );
    handleClose();
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Manage Banners</h2>
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Banner ID</th>
            <th>Name</th>
            <th>Image</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {banners.map((banner) => (
            <tr key={banner.id}>
              <td>{banner.id}</td>
              <td>{banner.name}</td>
              <td>
                <img
                  src={banner.image}
                  alt="Banner"
                  style={{ width: "100px", height: "50px" }}
                />
              </td>
              <td>
                <span
                  className={`badge ${
                    banner.status === "Active" ? "bg-success" : "bg-danger"
                  }`}
                >
                  {banner.status}
                </span>
              </td>
              <td>
                <button
                  className="btn btn-sm btn-primary"
                  onClick={() => handleEdit(banner)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit Banner Popup */}
      {showEditForm && selectedBanner && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h4>Edit Banner</h4>
            <form onSubmit={handleSave}>
              <div className="row">
                <div className="col-6">
                  <label>Current Banner:</label>
                  <img
                    src={s1}
                    alt="Current Banner"
                    className="img-fluid d-block mb-2"
                    style={{ maxWidth: "100%" }}
                  />
                </div>
                <div className="col-6">
                  <label>Upload New Banner:</label>
                  <input
                    type="file"
                    className="form-control"
                    accept="image/png, image/jpeg, image/jpg"
                    onChange={handleImageChange}
                  />
                  {errors.image && (
                    <small className="text-danger">{errors.image}</small>
                  )}

                  {newImage && (
                    <img
                      src={newImage}
                      alt="New Preview"
                      className="img-fluid d-block mb-2"
                      style={{ maxWidth: "100%" }}
                    />
                  )}
                  <div className="row">
                    <div className="d-flex justify-content-between mt-3">
                      <div className="col-4">
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={handleClose}
                        >
                          Cancel
                        </button>
                      </div>
                      <div className="col-4">
                        <button type="submit" className="btn btn-primary">
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdBanner;
