import React from "react";
import "./Cart.css";
import Button from "../Button/Button";
function Cart({ cartItems, onCheckout}) {
  const totalPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);
  
  return (
    <div className="cart__container">
      <div className="cart-container">
        
        {cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <div className="cart-img-container">
              <span className="cart-quantity">{item.quantity}</span>
              <img src={item.Image} alt={item.title} />
            </div>
            <div className="cart-title">{item.title}</div>
            {/* Add more information as needed */}
          </div>
        ))}
      </div>

     <div className="total-section">
        {cartItems.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          <>
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
            {/* Additional price-related content or components can be added here */}
          </>
        )}
      </div>

      <div>
      <Button
        title={`${cartItems.length === 0 ? "Order !" : "Checkout"} `}
        type={"checkout"}
        disable={cartItems.length === 0 ? true : false}
        onClick={onCheckout}
      />
      <Button
        title={`${cartItems.length === 0 ? "Confirm Receipt" : "Mark As Paid"} `}
        type={"paid"}
        disable={cartItems.length === 0 ? true : true}
        onClick={onCheckout}
      />
      </div>
    </div>
  );
}

export default Cart;
