import React, { useState } from "react";
import "../../App.css";

const AdminContact = () => {
  const [inquiries, setInquiries] = useState([
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice@example.com",
      subject: "Order Issue",
      message: "I haven't received my order yet. Can you check?",
      date: "2024-03-16",
      status: "Reply",
    },
  ]);

  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [reply, setReply] = useState("");

  const viewInquiryDetails = (inquiry) => {
    setSelectedInquiry(inquiry);
    setShowModal(true);
  };

  const handleReplyChange = (e) => {
    setReply(e.target.value);
  };

  const sendReply = () => {
    alert(`Reply sent to ${selectedInquiry.email}: ${reply}`);
    setShowModal(false);
    setReply("");
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Contact Inquiries</h2>
      <div className="d-flex justify-content-end mb-3">
        <div className="d-flex">
          <input
            type="text"
            className="form-control me-2"
            placeholder="Search offers..."
          />
          <button className="btn btn-primary">Search</button>
        </div>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Subject</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {inquiries.map((inquiry) => (
            <tr key={inquiry.id}>
              <td>{inquiry.id}</td>
              <td>{inquiry.name}</td>
              <td>{inquiry.email}</td>
              <td>{inquiry.subject}</td>
              <td>{inquiry.date}</td>
              <td>
                <button
                  className="btn btn-info btn-sm"
                  onClick={() => viewInquiryDetails(inquiry)}
                >
                  Reply
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && selectedInquiry && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h4>Inquiry Details</h4>
            <div className="row">
              <div className="col-4">
                {" "}
                <p>
                  <strong>Name:</strong> {selectedInquiry.name}
                </p>
              </div>
              <div className="col-4">
                <p>
                  <strong>Email:</strong> {selectedInquiry.email}
                </p>
              </div>
              <div className="col-4">
                <p>
                  <strong>Subject:</strong> {selectedInquiry.subject}
                </p>
              </div>
            </div>
            <p>
              <strong>Message:</strong> {selectedInquiry.message}
            </p>
            <textarea
              className="form-control"
              rows="3"
              placeholder="Write your reply here..."
              value={reply}
              onChange={handleReplyChange}
            ></textarea>
            <div className="mt-3">
              <button className="btn btn-success me-2" onClick={sendReply}>
                Send Reply
              </button>
              <button
                className="btn btn-danger"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminContact;
