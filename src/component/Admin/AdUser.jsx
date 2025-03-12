import React, { Component } from "react";
import u1 from "../images/user1.png";
import c1 from "../images/proaddimg1.png";
export class AdUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        fullName: "",
        email: "",
        mobile: "",
        gender: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
        profileImage: null,
      },
      userFormShow: false,
      showUserView: false,
      userUpdateFormShow:false,
      errors: {}, // To store validation errors
      imagePreview: null, // To store image preview URL
    };
  }

  handleChange = (e) => {
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [e.target.name]: e.target.value,
      },
      errors: {
        ...prevState.errors,
        [e.target.name]: "",
      },
    }));
  };

  handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      this.setState((prevState) => ({
        formData: {
          ...prevState.formData,
          profileImage: file,
        },
        errors: {
          ...prevState.errors,
          profileImage: "",
        },
        imagePreview: URL.createObjectURL(file),
      }));
    }
  };

  validateForm = () => {
    let errors = {};
    let isValid = true;

    Object.keys(this.state.formData).forEach((key) => {
      if (!this.state.formData[key]) {
        errors[key] = "This field is required";
        isValid = false;
      }
    });

    this.setState({ errors });
    return isValid;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.validateForm()) {
      alert("Form submitted successfully!");
      console.log(this.state.formData);
    }
  };
  ShowUserForm = () => {
    this.setState({ userFormShow: true });
    this.setState({ showUserView: false });
    this.setState({ userUpdateFormShow: false });
  };
  ShowUserView = () => {
    this.setState({ userFormShow: false });
    this.setState({ showUserView: true });
    this.setState({ userUpdateFormShow: false });
  };
  ShowUpdateFormUser=()=>{
    this.setState({ userFormShow: false });
    this.setState({ showUserView: false });
    this.setState({ userUpdateFormShow: true });
  }
  render() {
    const { formData, errors, imagePreview } = this.state;

    return (
      <center>
         <div className="container ">
                 <div
                   className="row align-items-center shadow rounded"
                   style={{
                     backgroundImage: `url(${c1})`,
                     backgroundSize: "cover",
                     backgroundPosition: "center",
                     backgroundRepeat: "no-repeat",
                     height: "200px",
                   }}
                 >
            <div className="col-12 col-md-4 d-flex justify-content-center justify-content-md-start mb-2 mb-md-0">
              <h2  className="text-light text-md-left"> User View</h2>
            </div>
            {/* Search form start*/}
            <div className="col-12 col-md-4 d-flex justify-content-center mb-2 mb-md-0">
              <form method="GET" action="" className="d-flex w-100">
                <div className="input-group w-100">
                  <input
                    type="text"
                    name="search"
                    className="form-control"
                    placeholder="Search here"
                    value={this.state.search || ""}
                    onChange={(e) => this.setState({ search: e.target.value })}
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-dark w-10 p-3 ms-2"
                      type="submit"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </form>
            </div>{" "}
            {/* Search form end */}
            {/* Add User Button start */}
            <div className="col-12 col-md-4 d-flex justify-content-center justify-content-md-end">
              <button
                id="toggleFormBtnI"
                className="btn btn-success w-30 fs-5"
                onClick={this.ShowUserForm} //this function name
              >
                Add User
              </button>
            </div>{" "}
            {/* Add User Button End*/}
          </div>
        </div>
        {/* User View Start*/}
        <div className="row mt-5">
          <div className="col-1 offset-1 col-md-10 ">
            <div className="table-responsive">
              <table className="table table-bordered text-center align-middle">
                <thead className="table-dark">
                  <tr>
                    <th>Sr No</th>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Status</th>
                    <th>View</th>
                    <th>Update</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody className="fs-4">
                  <tr>
                    <td>1</td>

                    <td>Angel Raiyani</td>
                    <td>angelraiyanii@gmail.com</td>
                    <td className="text-success  fw-bold">Active</td>
                    <td>
                      <button
                        class="btn btn-info fs-5 show-btn "
                        onClick={this.ShowUserView}
                      >
                        View{" "}
                      </button>
                    </td>
                    <td>
                      <button
                        class="btn btn-success fs-5 show-btn "
                         onClick={this.ShowUpdateFormUser}
                      >
                        Update{" "}
                      </button>
                    </td>
                    <td>
                      <button class="btn btn-danger fs-5 show-btn ">
                        Delete{" "}
                      </button>
                    </td>
                  </tr>
                  <tr>
                    {this.state.showUserView && (
                      <td colSpan="9">
                        <div className="d-flex justify-content-center">
                          <div className="container mt-5">
                            <div className="row align-items shadow p-3 rounded">
                              <div className="row">
                                <div className="col-md-4 text-center mb-4">
                                  <div className="profile-picture mb-3">
                                    <img
                                      src={u1}
                                      alt="User Profile"
                                      className="img-fluid rounded-circle"
                                      style={{
                                        width: "260px",
                                        height: "275px",
                                        objectFit: "cover",
                                      }}
                                    />
                                  </div>
                                  <h4 className="user-name">Angel Raiyani</h4>
                                  <p className="text-muted fs-5">
                                    angelraiyanii@gmail.com
                                  </p>
                                </div>
                                <div className="col-md-8">
                                  {/* Personal Information Start*/}
                                  <fieldset className="border p-4 rounded mb-4">
                                    <h3
                                      className="w-auto text-start p-4"
                                      style={{ color: "#41566E" }}
                                    >
                                      Personal Information
                                    </h3>

                                    <div className="row text-start  fs-4">
                                      <div className="col-md-6 mb-3">
                                        <label htmlFor="full-name">
                                          Full Name
                                        </label>
                                        <p
                                          id="full-name"
                                          className="form-control-static"
                                        >
                                          Angel Raiyani
                                        </p>
                                      </div>
                                      <div className="col-md-6 mb-3">
                                        <label htmlFor="gender">Gender</label>
                                        <p
                                          id="gender"
                                          className="form-control-static"
                                        >
                                          Female
                                        </p>
                                      </div>
                                    </div>
                                    <div className="row text-start  fs-4">
                                      <div className="col-md-6 mb-3">
                                        <label htmlFor="email">
                                          Email Address
                                        </label>
                                        <p
                                          id="email"
                                          className="form-control-static"
                                        >
                                          angelraiyanii@gmail.com
                                        </p>
                                      </div>
                                      <div className="col-md-6 mb-3">
                                        <label htmlFor="phone">
                                          Phone Number
                                        </label>
                                        <p
                                          id="phone"
                                          className="form-control-static"
                                        >
                                          44545 45455
                                        </p>
                                      </div>
                                    </div>

                                    <h3
                                      className="w-auto text-start p-4"
                                      style={{ color: "#41566E" }}
                                    >
                                      Address Information
                                    </h3>
                                    <div className="row text-start fs-4">
                                      <div className="col-md-6 mb-3">
                                        <label htmlFor="address">Address</label>
                                        <p
                                          id="address"
                                          className="form-control-static"
                                        >
                                          KasturbaDham Tramba Bhavnagar Highway
                                        </p>
                                      </div>
                                      <div className="col-md-6 mb-3">
                                        <label htmlFor="city">City</label>
                                        <p
                                          id="city"
                                          className="form-control-static"
                                        >
                                          Rajkot
                                        </p>
                                      </div>
                                    </div>
                                    <div className="row text-start  fs-4">
                                      <div className="col-md-6 mb-3">
                                        <label htmlFor="state">State</label>
                                        <p
                                          id="state"
                                          className="form-control-static"
                                        >
                                          Gujarat
                                        </p>
                                      </div>
                                      <div className="col-md-6 mb-3">
                                        <label htmlFor="zip">Pin Code</label>
                                        <p
                                          id="zip"
                                          className="form-control-static"
                                        >
                                          360020
                                        </p>
                                      </div>
                                    </div>
                                  </fieldset>
                                  {/* Personal Information End*/}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    )}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* User View End */}
        {/* User Add Form Start */}
        {this.state.userFormShow && (
          <div className="container d-flex justify-content-center align-items-center ">
            <div
              className="card shadow-lg p-4 w-100"
              style={{ maxWidth: "600px" }}
            >
              <h2 className="text-center mb-2">Add User</h2>
              <form onSubmit={this.handleSubmit}>
                {/* Full Name */}
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-bold">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      className={`form-control ${
                        errors.fullName ? "is-invalid" : ""
                      }`}
                      value={formData.fullName}
                      onChange={this.handleChange}
                      placeholder="Enter your full name"
                    />
                    {errors.fullName && (
                      <div className="invalid-feedback">{errors.fullName}</div>
                    )}
                  </div>

                  {/* Email */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-bold">Email</label>
                    <input
                      type="email"
                      name="email"
                      className={`form-control ${
                        errors.email ? "is-invalid" : ""
                      }`}
                      value={formData.email}
                      onChange={this.handleChange}
                      placeholder="Enter your email"
                    />
                    {errors.email && (
                      <div className="invalid-feedback">{errors.email}</div>
                    )}
                  </div>
                </div>

                {/* Mobile */}
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-bold">Mobile No</label>
                    <input
                      type="tel"
                      name="mobile"
                      className={`form-control ${
                        errors.mobile ? "is-invalid" : ""
                      }`}
                      value={formData.mobile}
                      onChange={this.handleChange}
                      placeholder="Enter your mobile number"
                    />
                    {errors.mobile && (
                      <div className="invalid-feedback">{errors.mobile}</div>
                    )}
                  </div>

                  {/* Gender */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-bold">Gender</label>
                    <select
                      name="gender"
                      className={`form-control ${
                        errors.gender ? "is-invalid" : ""
                      }`}
                      value={formData.gender}
                      onChange={this.handleChange}
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                    {errors.gender && (
                      <div className="invalid-feedback">{errors.gender}</div>
                    )}
                  </div>
                </div>
                {/* Address */}
                <div className="mb-3">
                  <label className="form-label fw-bold">Address</label>
                  <textarea
                    name="address"
                    className={`form-control ${
                      errors.address ? "is-invalid" : ""
                    }`}
                    value={formData.address}
                    onChange={this.handleChange}
                    placeholder="Enter your address"
                    rows="2"
                  ></textarea>
                  {errors.address && (
                    <div className="invalid-feedback">{errors.address}</div>
                  )}
                </div>

                {/* City & State */}
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-bold">City</label>
                    <input
                      type="text"
                      name="city"
                      className={`form-control ${
                        errors.city ? "is-invalid" : ""
                      }`}
                      value={formData.city}
                      onChange={this.handleChange}
                      placeholder="Enter your city"
                    />
                    {errors.city && (
                      <div className="invalid-feedback">{errors.city}</div>
                    )}
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-bold">State</label>
                    <input
                      type="text"
                      name="state"
                      className={`form-control ${
                        errors.state ? "is-invalid" : ""
                      }`}
                      value={formData.state}
                      onChange={this.handleChange}
                      placeholder="Enter your state"
                    />
                    {errors.state && (
                      <div className="invalid-feedback">{errors.state}</div>
                    )}
                  </div>
                </div>

                {/* Pincode */}
                <div className="mb-3">
                  <label className="form-label fw-bold">Pincode</label>
                  <input
                    type="text"
                    name="pincode"
                    className={`form-control ${
                      errors.pincode ? "is-invalid" : ""
                    }`}
                    value={formData.pincode}
                    onChange={this.handleChange}
                    placeholder="Enter your pincode"
                  />
                  {errors.pincode && (
                    <div className="invalid-feedback">{errors.pincode}</div>
                  )}
                </div>

                {/* Image Upload */}
                <div className="mb-3">
                  <label className="form-label fw-bold">Profile Image</label>
                  <input
                    type="file"
                    name="profileImage"
                    className={`form-control ${
                      errors.profileImage ? "is-invalid" : ""
                    }`}
                    accept="image/png, image/jpeg, image/jpg"
                    onChange={this.handleImageChange}
                  />
                  {errors.profileImage && (
                    <div className="invalid-feedback">
                      {errors.profileImage}
                    </div>
                  )}
                  {imagePreview && (
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="mt-3 img-thumbnail"
                      width="100"
                    />
                  )}
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-primary w-50">
                  Add User
                </button>
              </form>
            </div>
          </div>
        )}
        {/* User Add Form End */}
        {/* User update Form Start */}
        {this.state.userUpdateFormShow && (
          <div className="container d-flex justify-content-center align-items-center ">
            <div
              className="card shadow-lg p-4 w-100"
              style={{ maxWidth: "600px" }}
            >
              <h2 className="text-center mb-2">Update User</h2>
              <form onSubmit={this.handleSubmit}>
                {/* Full Name */}
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-bold">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      className={`form-control ${
                        errors.fullName ? "is-invalid" : ""
                      }`}
                      value={formData.fullName}
                      onChange={this.handleChange}
                      placeholder="Enter your full name"
                    />
                    {errors.fullName && (
                      <div className="invalid-feedback">{errors.fullName}</div>
                    )}
                  </div>

                  {/* Email */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-bold">Email</label>
                    <input
                      type="email"
                      name="email"
                      className={`form-control ${
                        errors.email ? "is-invalid" : ""
                      }`}
                      value={formData.email}
                      onChange={this.handleChange}
                      placeholder="Enter your email"
                    />
                    {errors.email && (
                      <div className="invalid-feedback">{errors.email}</div>
                    )}
                  </div>
                </div>

                {/* Mobile */}
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-bold">Mobile No</label>
                    <input
                      type="tel"
                      name="mobile"
                      className={`form-control ${
                        errors.mobile ? "is-invalid" : ""
                      }`}
                      value={formData.mobile}
                      onChange={this.handleChange}
                      placeholder="Enter your mobile number"
                    />
                    {errors.mobile && (
                      <div className="invalid-feedback">{errors.mobile}</div>
                    )}
                  </div>

                  {/* Gender */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-bold">Gender</label>
                    <select
                      name="gender"
                      className={`form-control ${
                        errors.gender ? "is-invalid" : ""
                      }`}
                      value={formData.gender}
                      onChange={this.handleChange}
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                    {errors.gender && (
                      <div className="invalid-feedback">{errors.gender}</div>
                    )}
                  </div>
                </div>
                {/* Address */}
                <div className="mb-3">
                  <label className="form-label fw-bold">Address</label>
                  <textarea
                    name="address"
                    className={`form-control ${
                      errors.address ? "is-invalid" : ""
                    }`}
                    value={formData.address}
                    onChange={this.handleChange}
                    placeholder="Enter your address"
                    rows="2"
                  ></textarea>
                  {errors.address && (
                    <div className="invalid-feedback">{errors.address}</div>
                  )}
                </div>

                {/* City & State */}
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-bold">City</label>
                    <input
                      type="text"
                      name="city"
                      className={`form-control ${
                        errors.city ? "is-invalid" : ""
                      }`}
                      value={formData.city}
                      onChange={this.handleChange}
                      placeholder="Enter your city"
                    />
                    {errors.city && (
                      <div className="invalid-feedback">{errors.city}</div>
                    )}
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-bold">State</label>
                    <input
                      type="text"
                      name="state"
                      className={`form-control ${
                        errors.state ? "is-invalid" : ""
                      }`}
                      value={formData.state}
                      onChange={this.handleChange}
                      placeholder="Enter your state"
                    />
                    {errors.state && (
                      <div className="invalid-feedback">{errors.state}</div>
                    )}
                  </div>
                </div>

                {/* Pincode */}
                <div className="mb-3">
                  <label className="form-label fw-bold">Pincode</label>
                  <input
                    type="text"
                    name="pincode"
                    className={`form-control ${
                      errors.pincode ? "is-invalid" : ""
                    }`}
                    value={formData.pincode}
                    onChange={this.handleChange}
                    placeholder="Enter your pincode"
                  />
                  {errors.pincode && (
                    <div className="invalid-feedback">{errors.pincode}</div>
                  )}
                </div>

                {/* Image Upload */}
                <div className="mb-3">
                  <label className="form-label fw-bold">Profile Image</label>
                  <input
                    type="file"
                    name="profileImage"
                    className={`form-control ${
                      errors.profileImage ? "is-invalid" : ""
                    }`}
                    accept="image/png, image/jpeg, image/jpg"
                    onChange={this.handleImageChange}
                  />
                  {errors.profileImage && (
                    <div className="invalid-feedback">
                      {errors.profileImage}
                    </div>
                  )}
                  {imagePreview && (
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="mt-3 img-thumbnail"
                      width="100"
                    />
                  )}
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-primary w-50">
                  Update User
                </button>
              </form>
            </div>
          </div>
        )}
        {/* User Update Form End */}
        {/* Pagenation start */}
        <div className="row">
          <div className="col-md-5"></div>
          <nav className="col-md-2">
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link btn-dark" href="#">
                  1<i className="fa fa-chevron-left"></i>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link btn-outline-dark" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link btn-dark" href="#">
                  3<i className="fa fa-chevron-right"></i>
                </a>
              </li>
            </ul>
          </nav>
          <div className="col-md-5"></div>
        </div>
        {/* Pagination End */}
      </center>
    );
  }
}

export default AdUser;
