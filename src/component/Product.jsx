import React, { Component } from "react";
import pro1 from "./images/pro1.png";
import pro2 from "./images/pro2.png";
import pro3 from "./images/pro3.png";
import pro4 from "./images/pro4.png";
import { FaHeart } from "react-icons/fa"; // Import Heart Icon
import { FaInfoCircle } from "react-icons/fa"; // Import Info Icon
import "../App.css";

export class Product extends Component {
  constructor() {
    super();
    this.state = {
      liked: [false, false, false, false], // Stores liked/unliked status for each product
    };
  }

  toggleLike = (index) => {
    const updatedLikes = [...this.state.liked];
    updatedLikes[index] = !updatedLikes[index];
    this.setState({ liked: updatedLikes });
  };

  render() {
    return (
      <div className="container mt-4" style={{ paddingBottom: "20px" }}>
        <h2 className="text-center" style={{ paddingBottom: "20px" }}>
          Product List
        </h2>

        <div className="row">
          {/* Product 1 */}
          <div className="col-md-3">
            <div className="card product-card text-center">
              <img src={pro1} alt="Gold Ring" className="product-image" />
              <div className="overlay">
                <FaHeart
                  className={`like-icon ${this.state.liked[0] ? "liked" : ""}`}
                  onClick={() => this.toggleLike(0)}
                />
                <FaInfoCircle className="info-icon" />
                <h4>Gold Ring</h4>
                <p>$120</p>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>

          {/* Product 2 */}
          <div className="col-md-3">
            <div className="card product-card text-center">
              <img src={pro2} alt="Silver Bracelet" className="product-image" />
              <div className="overlay">
                <FaHeart
                  className={`like-icon ${this.state.liked[1] ? "liked" : ""}`}
                  onClick={() => this.toggleLike(1)}
                />
                <FaInfoCircle className="info-icon" />
                <h4>Silver Bracelet</h4>
                <p>$90</p>
                <button
                 className="btn btn-primary" >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/* Product 3 */}
          <div className="col-md-3">
            <div className="card product-card text-center">
              <img
                src={pro3}
                alt="Diamond Earrings"
                className="product-image"
              />
              <div className="overlay">
                <FaHeart
                  className={`like-icon ${this.state.liked[2] ? "liked" : ""}`}
                  onClick={() => this.toggleLike(2)}
                />
                <FaInfoCircle className="info-icon" />
                <h4>Diamond Earrings</h4>
                <p>$200</p>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>

          {/* Product 4 */}
          <div className="col-md-3">
            <div className="card product-card text-center">
              <img
                src={pro4}
                alt="Platinum Necklace"
                className="product-image"
              />
              <div className="overlay">
                <FaHeart
                  className={`like-icon ${this.state.liked[3] ? "liked" : ""}`}
                  onClick={() => this.toggleLike(3)}
                />
                <FaInfoCircle className="info-icon" />
                <h4>Platinum Necklace</h4>
                <p>$350</p>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
