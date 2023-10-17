import React, { useState } from "react";

function PlantCard({ plant }) {
  const [inStock, setInStock] = useState(true)
  const { name, image, price } = plant;

  function handleInClick() {
    setInStock(false)
  }

  function handleOutClick() {
    setInStock(true)
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock === true ? (
        <button className="primary" onClick={handleInClick}>In Stock</button>
      ) : (
        <button onClick={handleOutClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
