import React, { useState } from "react";
import {
  RiHeartLine,
  RiAddCircleLine,
  RiHeart2Fill,
  RiShoppingCartFill,
} from "react-icons/ri";
import { useContext } from "react";
import { Context } from "../context";
import PropTypes from "prop-types";

function Image(props) {
  const { className, img } = props;
  const [hovered, setHovered] = useState(false);
  const { toggleFavorite, cartItem, addToCart, removeFromCart } =
    useContext(Context);

  function handleMouseEnter() {
    setHovered(true);
  }

  function handleMouseLeave() {
    setHovered(false);
  }

  function heartIcon() {
    if (img.isFavorite) {
      return (
        <RiHeart2Fill
          className="favorite"
          onClick={() => toggleFavorite(img.id)}
        />
      );
    } else if (hovered) {
      return (
        <RiHeartLine
          className="favorite"
          onClick={() => toggleFavorite(img.id)}
        />
      );
    } else {
      return null;
    }
  }

  function cartIcon() {
    const alreadyInCart = cartItem.some((item) => item.id === img.id);
    if (alreadyInCart) {
      return (
        <RiShoppingCartFill
          className="cart"
          onClick={() => removeFromCart(img.id)}
        />
      );
    } else if (hovered) {
      return (
        <RiAddCircleLine className="cart" onClick={() => addToCart(img)} />
      );
    }
  }

  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {heartIcon()}
      <img
        src={img.url}
        className="image-grid"
        onClick={() => {
          toggleFavorite(img.id);
        }}
        alt="image"
      />
      {cartIcon()}
    </div>
  );
}

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool,
  }),
};

export default Image;
