import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(r => r.json())
    .then(plants => setPlants(plants))
  }, [])

  function onNewPlantSubmit(newPlant) {
    setPlants([...plants, newPlant])
  }

  function handleSearch(searchInput) {
    const plantsToDisplay = plants.filter(plant => {
      console.log(plant.name, searchInput)
      return plant.name.toLowerCase().includes(searchInput.toLowerCase())
    })
    console.log(plantsToDisplay)
    setPlants(plantsToDisplay)
  }

  return (
    <main>
      <NewPlantForm onNewPlant={onNewPlantSubmit}/>
      <Search onSearch={handleSearch}/>
      <PlantList plants={plants}/>
    </main>
  );
}

export default PlantPage;
