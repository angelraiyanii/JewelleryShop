import React from "react";
import c5 from "./Images/category.png"; // Sample product image
import Offer from "./Offer";
class Cart extends Component {
Render()  {
  return (
    <div className="container">
      <div className="row align-items shadow rounded">
        <section className="cart-section">
          <div className="container">
            <h2 className="text-center">Your Cart</h2>

            {/* Cart Table */}
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead className="table-dark">
                  <tr>
                    <th>Product Image</th>
                    <th>Product Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img
                        src={c5}
                        alt="Product"
                        className="img-fluid rounded"
                        style={{ height: "100px", objectFit: "cover" }}
                      />
                    </td>
                    <td>Earring</td>
                    <td>Diamond Earring</td>
                    <td>₹ 1598.22</td>
                    <td>
                      <center>
                        <input
                          type="number"
                          className="form-control quantity"
                          value="1"
                          readOnly
                          style={{ width: "50px" }}
                        />
                      </center>
                    </td>
                    <td>₹ 1598.22</td>
                    <td>
                      <button className="btn btn-outline-primary ms-2">
                        View Product
                      </button>{" "}
                      <button className="btn btn-outline-danger">Remove</button>
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan="5" className="text-right">
                      <strong>Total</strong>
                    </td>
                    <td>
                      <strong>₹1598.22</strong>
                    </td>
                    <td>
                      <button className="btn btn-success">Order Now</button>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </section>
      </div>
      <Offer />
    </div>
  );
};
};
export default Cart;
