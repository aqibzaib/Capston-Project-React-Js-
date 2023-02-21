import { Route, Routes } from "react-router-dom";
import React from "react";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Photos from "./pages/Photos";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Photos />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
