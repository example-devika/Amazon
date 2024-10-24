import React from "react";
import { useParams } from "react-router-dom";
import { mobileData } from "../Data/Mobile-Data";
import "./singles.css";
import { useCart } from "../context/cartcontext";
import Header from "../header";
import "../header.css";
const Mobilesingle = () => {
  const { id } = useParams();
  const { addToCart } = useCart() || {};

  const product = mobileData.find((item) => item.id === id);

  return (
    <div>
      <Header />

      <div className="single-page">
        <div className="single-img">
          <img src={product.image} alt="mobile" />
        </div>
        <div className="single-details">
          <div className="single-company">
            <h3>{product.company}</h3>
          </div>
          <div className="single-model">
            <h3>{product.model}</h3>
          </div>
          <div className="single-price">
            <h4>
              <small>$</small>
              {product.price}
            </h4>
          </div>
          <div className="single-desc">
            <p>{product.description}</p>
          </div>

          <button className="addtocart" onClick={() => addToCart(product)}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mobilesingle;
