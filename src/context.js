import React, { createContext, useEffect, useState } from "react";

const Context = createContext();

function ContextProvider(props) {
  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItem, setCartItem] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
        );
        const json = await response.json();
        setAllPhotos(json);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
    console.log(allPhotos);
  }, []);
  function toggleFavorite(id) {
    const updatedArr = allPhotos.map((photo) => {
      if (photo.id === id) {
        return { ...photo, isFavorite: !photo.isFavorite };
      }
      return photo;
    });

    setAllPhotos(updatedArr);
  }

  function removeFromCart(id) {
    setCartItem((prevItem) => prevItem.filter((item) => item.id !== id));
  }
  function generatePrice() {
    const basePrice = Math.floor(Math.random() * 5) + 3;
    const isRound = Math.random() < 0.5;
    const finalPrice = isRound ? basePrice : basePrice + 0.99;
    return { basePrice, finalPrice };
  }

  function addToCart(newItem) {
    const newItemWithPrice = {
      ...newItem,
      price: generatePrice().finalPrice,
    };
    setCartItem((prevItem) => [...prevItem, newItemWithPrice]);
  }
  function emptyCart() {
    setCartItem([]);
  }
  return (
    <Context.Provider
      value={{
        allPhotos: allPhotos,
        toggleFavorite: toggleFavorite,
        cartItem: cartItem,
        addToCart: addToCart,
        removeFromCart: removeFromCart,
        generatePrice: generatePrice,
        emptyCart: emptyCart,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
