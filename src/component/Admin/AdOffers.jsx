import React, { useState } from "react";
import "../../App.css";

const AdOffers = () => {
  const [offers, setOffers] = useState([
    {
      id: 1,
      title: "Winter Sale",
      discount: "30%",
      validity: "2025-03-31",
      status: "Active",
      description: "Get 30% off on all winter collections.",
      maxdiscount: "500",
      rate: "30%",
      startDate: "2025-01-01",
      endDate: "2025-03-31",
      orderTotal: "1000",
      banner: ""
    },
    {
      id: 2,
      title: "Summer Bonanza",
      discount: "25%",
      validity: "2025-06-15",
      status: "Expired",
      description: "Flat 25% discount on summer items.",
      maxdiscount: "400",
      rate: "25%",
      startDate: "2025-04-01",
      endDate: "2025-06-15",
      orderTotal: "800",
      banner: ""
    },
    {
      id: 3,
      title: "New Year Deal",
      discount: "40%",
      validity: "2025-01-01",
      status: "Active",
      description: "Exclusive 40% off on New Year specials.",
      maxdiscount: "600",
      rate: "40%",
      startDate: "2024-12-15",
      endDate: "2025-01-15",
      orderTotal: "1200",
      banner: ""
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editOfferId, setEditOfferId] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    maxdiscount: "",
    description: "",
    rate: "",
    startDate: "",
    endDate: "",
    orderTotal: "",
    banner: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.title.trim()) tempErrors.title = "Title is required.";
    if (!formData.description.trim())
      tempErrors.description = "Description is required.";
    if (!formData.maxdiscount.trim())
      tempErrors.maxdiscount = "Maximum Discount Amount is required.";
    if (!formData.rate.trim()) tempErrors.rate = "Rate is required.";
    else if (!/^\d+%$/.test(formData.rate))
      tempErrors.rate =
        "Rate should be in percentage format (e.g., 30%).";
    if (!formData.startDate) tempErrors.startDate = "Start Date is required.";
    else {
      const today = new Date().toISOString().split("T")[0];
      if (formData.startDate < today && !isEditMode)
        tempErrors.startDate = "Date cannot be in the past.";
    }
    if (!formData.endDate) tempErrors.endDate = "End Date is required.";
    else {
      const today = new Date().toISOString().split("T")[0];
      if (formData.endDate < today && !isEditMode)
        tempErrors.endDate = "Date cannot be in the past.";
    }
    if (!formData.orderTotal.trim()) tempErrors.orderTotal = "Order Total is required.";
    if (!formData.banner.trim()) tempErrors.banner = "Banner is required.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      if (isEditMode) {
        // Update existing offer
        const updatedOffers = offers.map(offer => 
          offer.id === editOfferId ? {
            ...offer,
            title: formData.title,
            description: formData.description,
            discount: formData.rate, // Keep the table display consistent
            maxdiscount: formData.maxdiscount,
            rate: formData.rate,
            validity: formData.endDate, // Keep the table display consistent
            startDate: formData.startDate,
            endDate: formData.endDate,
            orderTotal: formData.orderTotal,
            banner: formData.banner
          } : offer
        );
        setOffers(updatedOffers);
      } else {
        // Add new offer
        setOffers([
          ...offers,
          { 
            id: offers.length + 1, 
            ...formData, 
            discount: formData.rate, // For table display
            validity: formData.endDate, // For table display
            status: "Active" 
          },
        ]);
      }
      
      // Reset form state
      resetForm();
    }
  };

  const handleEdit = (id) => {
    const offerToEdit = offers.find(offer => offer.id === id);
    if (offerToEdit) {
      setFormData({
        title: offerToEdit.title,
        description: offerToEdit.description,
        maxdiscount: offerToEdit.maxdiscount,
        rate: offerToEdit.rate,
        startDate: offerToEdit.startDate,
        endDate: offerToEdit.endDate,
        orderTotal: offerToEdit.orderTotal,
        banner: offerToEdit.banner || ""
      });
      setEditOfferId(id);
      setIsEditMode(true);
      setShowForm(true);
    }
  };

  const resetForm = () => {
    setFormData({
      title: "",
      maxdiscount: "",
      description: "",
      rate: "",
      startDate: "",
      endDate: "",
      orderTotal: "",
      banner: "",
    });
    setIsEditMode(false);
    setEditOfferId(null);
    setShowForm(false);
    setErrors({});
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Admin Offers</h2>
      <div className="d-flex justify-content-between mb-3">
        <div className="d-flex">
          <input
            type="text"
            className="form-control me-2"
            placeholder="Search offers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="btn btn-primary">Search</button>
        </div>
        <button
          className="btn btn-success"
          onClick={() => {
            if (isEditMode || showForm) {
              resetForm();
            } else {
              setShowForm(true);
            }
          }}
        >
          {showForm ? (isEditMode ? "Cancel Edit" : "Close Add Offer Form") : "Add New Offer"}
        </button>
      </div>

      {showForm && (
        <div className="card p-3 mb-4">
          <h4>{isEditMode ? "Edit Offer" : "Add New Offer"}</h4>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-4 mb-2">
                <label>Title:</label>
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                />
                {errors.title && (
                  <small className="text-danger">{errors.title}</small>
                )}
              </div>

              <div className="col-4 mb-2">
                <label>Description:</label>
                <textarea
                  className="form-control"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                ></textarea>
                {errors.description && (
                  <small className="text-danger">{errors.description}</small>
                )}
              </div>

              <div className="col-4 mb-2">
                <label>Rate:</label>
                <input
                  type="text"
                  className="form-control"
                  name="rate"
                  value={formData.rate}
                  onChange={handleInputChange}
                />
                {errors.rate && (
                  <small className="text-danger">{errors.rate}</small>
                )}
              </div>
            </div>

            <div className="row">
              <div className="col-4 mb-2">
                <label>Maximum Discount Amount:</label>
                <input
                  type="text"
                  className="form-control"
                  name="maxdiscount"
                  value={formData.maxdiscount}
                  onChange={handleInputChange}
                />
                {errors.maxdiscount && (
                  <small className="text-danger">{errors.maxdiscount}</small>
                )}
              </div>

              <div className="col-4 mb-2">
                <label>Order Total:</label>
                <input
                  type="text"
                  className="form-control"
                  name="orderTotal"
                  value={formData.orderTotal}
                  onChange={handleInputChange}
                />
                {errors.orderTotal && (
                  <small className="text-danger">{errors.orderTotal}</small>
                )}
              </div>

              <div className="col-4 mb-2">
                <label>Start Date:</label>
                <input
                  type="date"
                  className="form-control"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleInputChange}
                />
                {errors.startDate && (
                  <small className="text-danger">{errors.startDate}</small>
                )}
              </div>
            </div>

            <div className="row">
              <div className="col-4 mb-2">
                <label>End Date:</label>
                <input
                  type="date"
                  className="form-control"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleInputChange}
                />
                {errors.endDate && (
                  <small className="text-danger">{errors.endDate}</small>
                )}
              </div>

              <div className="col-4 mb-2">
                <label>Banner:</label>
                <input
                  type="file"
                  className="form-control"
                  name="banner"
                  onChange={handleInputChange}
                />
                {errors.banner && (
                  <small className="text-danger">{errors.banner}</small>
                )}
              </div>

              <div className="col-4 mt-4">
                <button type="submit" className="btn btn-primary">
                  {isEditMode ? "Update Offer" : "Add Offer"}
                </button>
                {isEditMode && (
                  <button 
                    type="button" 
                    className="btn btn-secondary ms-2"
                    onClick={resetForm}
                  >
                    Cancel
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      )}

      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Offer ID</th>
            <th>Title</th>
            <th>Discount</th>
            <th>Validity</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {offers
            .filter(offer => 
              offer.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
              offer.description.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((offer) => (
            <tr key={offer.id}>
              <td>{offer.id}</td>
              <td>{offer.title}</td>
              <td>{offer.discount}</td>
              <td>{offer.validity}</td>
              <td>
                <span
                  className={`badge ${
                    offer.status === "Active" ? "bg-success" : "bg-danger"
                  }`}
                >
                  {offer.status}
                </span>
              </td>
              <td>
                <button 
                  className="btn btn-sm btn-info"
                  onClick={() => handleEdit(offer.id)}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdOffers;