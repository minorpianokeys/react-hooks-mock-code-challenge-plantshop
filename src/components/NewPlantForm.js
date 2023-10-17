import React, { useState } from "react";

function NewPlantForm({ onNewPlant }) {
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [price, setPrice] = useState("")

  function handleNameChange(e) {
    setName(e.target.value)
  }

  function handleImageChange(e) {
    setImage(e.target.value)
  }

  function handlePriceChange(e) {
    setPrice(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      name: name,
      image: image,
      price: price
    };
    console.log(formData)
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData),
    })
    .then(r => r.json())
    .then(newPlant => onNewPlant(newPlant))
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" onChange={handleNameChange}/>
        <input type="text" name="image" placeholder="Image URL" onChange={handleImageChange}/>
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={handlePriceChange}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
