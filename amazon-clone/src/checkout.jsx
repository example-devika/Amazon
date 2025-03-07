import React from "react";
import { useCart } from "./context/cartcontext";

const Checkout = () => {
  const { cartItems } = useCart();
  
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      return total + ((item.quantity || 1) * (item.price || 0));
    }, 0);
  };
  
  return (
    <div className="checkout">
      <h1>Checkout:</h1>
      <h3>Total Price: ${getTotalPrice()}</h3>
    </div>
  );
};

export default Checkout;
