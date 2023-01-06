import { useState, useEffect } from "react";

import Pokedex from "./components/Pokedex";

export interface pokemonSchema {
  name: string;
  url: string;
}

function App() {
  const [pokeData, setPokeData] = useState<pokemonSchema[]>([]);

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
