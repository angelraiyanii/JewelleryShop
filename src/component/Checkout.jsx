import React, { useState } from "react";

const Checkout = () => {
  const [orderDetails, setOrderDetails] = useState({
    order_id: "",
    total: "",
  });

  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    setOrderDetails({ ...orderDetails, [e.target.name]: e.target.value });
  };

  // Validate Form
  const validateForm = () => {
    let tempErrors = {};
    if (!orderDetails.order_id.trim())
      tempErrors.order_id = "Order ID is required.";
    if (!orderDetails.total.trim())
      tempErrors.total = "Total amount is required.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Order Details:", orderDetails);
      alert("Order placed successfully!");
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Checkout</h2>
      <div className="card p-4 shadow">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-4"></div>
            <div className="col-4">
              <div className="mb-3">
                <label className="form-label">Order ID</label>
                <input
                  type="text"
                  className="form-control"
                  name="order_id"
                  value={orderDetails.order_id}
                  onChange={handleChange}
                />
                {errors.order_id && (
                  <small className="text-danger">{errors.order_id}</small>
                )}
              </div>
            </div>
            <div className="col-4"></div>
          </div>

          <div className="row">
            <div className="col-4"></div>
            <div className="col-4 mb-3">
              <label className="form-label">Total Amount</label>
              <input
                type="text"
                className="form-control"
                name="total"
                value={orderDetails.total}
                onChange={handleChange}
              />
              {errors.total && (
                <small className="text-danger">{errors.total}</small>
              )}
            </div>
            <div className="col-4"></div>
          </div>
          <div className="row">
            <div className="col-4"></div>
            <div className="col-4">
              <button type="submit" className="btn btn-success w-100">
                Place Order
              </button>
            </div>
            <div className="col-4"></div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
