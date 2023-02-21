import React, { useContext, useState } from "react";
import { RiDeleteBinLine, RiDeleteBinFill } from "react-icons/ri";

import { Context } from "../context";

function CartItem({ item }) {
  const { removeFromCart } = useContext(Context);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  return (
    <div className="cart-item">
      {isHovering ? (
        <RiDeleteBinFill
          onClick={() => removeFromCart(item.id)}
          onMouseLeave={handleMouseLeave}
        />
      ) : (
        <RiDeleteBinLine
          onClick={() => removeFromCart(item.id)}
          onMouseEnter={handleMouseEnter}
        />
      )}
      <img src={item.url} width="130px" />
      <p>${item.price.toFixed(2)}</p>
    </div>
  );
}

export default CartItem;
