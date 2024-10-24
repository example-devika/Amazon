import React, { useState } from "react";
import { useCart } from "./context/cartcontext";
import { Link, useSearchParams } from "react-router-dom";

const Usercart = () => {
  const { cartItems, removeFromCart } = useCart();
  const quantityincrease = (id) => {
    const updatedProduct = cartItems.filter((product) => product.id === id);
    console.log(updatedProduct);

    updatedProduct.quantity++;
    console.log(updatedProduct.quantity);
  };
  const quantitydecrease = (id) => {
    const updatedProduct = cartItems.filter((product) => product.id === id);
  };

  return (
    <>
      {cartItems.length === 0 ? (
        <h2 className="empty">Your cart is empty</h2>
      ) : (
        <div className="cart">
          {cartItems.map((item) => {
            return (
              <div className="cart-page" key={item.id}>
                <img src={item.image} alt="" />
                <div className="cart-details">
                  <h4>{item.model}</h4>
                  <h4>{item.price}</h4>
                </div>
                <div className="increase">
                  <button
                    className="add"
                    onClick={() => quantityincrease(item.id)}
                  >
                    +
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="sub"
                    onClick={() => quantitydecrease(item.id)}
                  >
                    -
                  </button>
                </div>
                <button onClick={() => removeFromCart(item)}>remove</button>
              </div>
            );
          })}
          <Link to="/checkout">
            <button className="checkoutbtn">Checkout</button>
          </Link>
        </div>
      )}
    </>
  );
};

export default Usercart;
