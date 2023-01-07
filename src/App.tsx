import { useState, useEffect } from "react";

import Pokedex from "./components/pokedex/Pokedex";
import { pokemonListSchema } from "./models/interfaces";

const App: React.FC = () => {
  const [pokeData, setPokeData] = useState<pokemonListSchema[]>([]);

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
