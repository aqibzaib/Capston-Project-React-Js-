import { React, useContext } from "react";
import { Link } from "react-router-dom";
import { RiShoppingCartLine, RiShoppingCartFill } from "react-icons/ri";
import { Context } from "../context";
function Header() {
  const { cartItem } = useContext(Context);
  const CartIcon =
    cartItem.length > 0 ? RiShoppingCartFill : RiShoppingCartLine;
  return (
    <header>
      <Link to="/">
        <h2>Pic Some</h2>
      </Link>

      <Link to="/cart">
        <CartIcon className="ri-fw ri-5x" size={28} />
        {/* <i className="ri-fw ri-2x">{cartClassName}</i> */}
      </Link>
    </header>
  );
}

export default Header;
