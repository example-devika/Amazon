import React, { useState } from "react";
import { useCart } from "./context/cartcontext";
import { Link, useSearchParams } from "react-router-dom";
import Checkout from "./checkout";

const Usercart = () => {
  const { cartItems, removeFromCart } = useCart();
  const [products,setProducts]=useState(cartItems)

  const quantityincrease = (id) => {
    const updatedProducts = products.map((product) => 
      product.id === id
        ? { ...product, quantity: product.quantity + 1 }  // Properly increment the quantity
        : product
    );
    console.log(updatedProducts)

    
    setProducts(updatedProducts);  // Update the state with the new product list
    console.log(products)
  };
  

  const quantitydecrease = (id) => {
    const updatedProducts = products.map((product) => 
      product.id === id&&product.quantity>1
        ? { ...product, quantity: product.quantity - 1 }  // Properly increment the quantity
        : product
    );
    console.log(updatedProducts)
    
    setProducts(updatedProducts);  // Update the state with the new product list
    console.log(products)

  };
  
  return (
    <>
      {cartItems.length === 0 ? (
        <h2 className="empty">Your cart is empty</h2>
      ) : (
        <div className="cart">
          {products.map((item) => {
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
