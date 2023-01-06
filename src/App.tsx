import { useState, useEffect } from "react";

import Pokedex from "./components/Pokedex";

function App() {
  const [pokeData, setPokeData] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((response) => response.json())
      .then((data) => setPokeData(data.results));
  }, []);

  return (
    <div className="App">
      <h1>Pokedex</h1>
      <Pokedex onPokeData={pokeData} />
    </div>
  );
}

export default App;
