import React, { useState, useEffect } from "react";

import Pokedex from "./components/pokedex/Pokedex";
import { pokemonDataSchema } from "./models/interfaces";

const App: React.FC = () => {
  const [pokeData, setPokeData] = useState<pokemonDataSchema[]>([]);
  const [searchedField, setSearchedField] = useState();

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => response.json())
      .then((data) => setPokeData(data.results));
  }, []);

  const searchPokemonHandler = (text: string) => {
    const searchedPokemon = pokeData.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(text.toLowerCase())
    );
    setPokeData(searchedPokemon);
  };

  return (
    <div className="App">
      <h1>Pokedex</h1>
      <Pokedex onPokeData={pokeData} onSearchPokemon={searchPokemonHandler} />
    </div>
  );
};

export default App;
