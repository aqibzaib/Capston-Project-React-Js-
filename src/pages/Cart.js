import React, { useContext, useState } from "react";
import CartItem from "../components/CartItem";
import { Context } from "../context";

function Cart() {
  const { cartItem, emptyCart } = useContext(Context);
  const [buttonText, setButtonText] = useState("Place Order");
  const cartItemElements = cartItem.map((item) => (
    <CartItem key={item.id} item={item} />
  ));
  const totalCost = cartItem.reduce((acc, item) => acc + item.price, 0);

  function placeOrder() {
    setButtonText("Ordering...");
    setTimeout(() => {
      console.log("Order Placed");
      setButtonText("Place Order");
      emptyCart();
    }, 3000);
  }
  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemElements}
      <p className="total-cost">Total: ${totalCost.toFixed(2)}</p>
      <div className="order-button">
        {cartItemElements.length ? (
          <button onClick={placeOrder}>{buttonText}</button>
        ) : (
          <button onClick={placeOrder} disabled>
            {buttonText}
          </button>
        )}
      </div>
    </main>
  );
}

export default Cart;
