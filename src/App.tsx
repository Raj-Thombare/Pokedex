import React, { useState, useEffect } from "react";

import Pokedex from "./components/pokedex/Pokedex";
import { pokemonDataSchema } from "./models/interfaces";

const App: React.FC = () => {
  const [pokeData, setPokeData] = useState<pokemonDataSchema[]>([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => response.json())
      .then((data) => setPokeData(data.results));
  }, []);

  return (
    <div className="App">
      <h1>Pokedex</h1>
      <Pokedex onPokeData={pokeData} />
    </div>
  );
};

export default App;
