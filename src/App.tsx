import React, { useState, useEffect } from "react";
import Pokedex from "./components/pokedex/Pokedex";
import { pokemonDataSchema } from "./models/interfaces";

const App: React.FC = () => {
  const [pokeData, setPokeData] = useState<pokemonDataSchema[]>([]);
  const [selected, setSelected] = useState<string>("");

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => response.json())
      .then((data) => setPokeData(data.results));
  }, []);

  const searchPokemonHandler = (text: string) => {
    const searchedPokemon = pokeData.filter((pokemon) => {
      return (
        pokemon.name && pokemon.name.toLowerCase().includes(text.toLowerCase())
      );
    });
    setPokeData(searchedPokemon);
  };

  const selectPokemonHandler = (data: string) => {
    setSelected(data);
  };

  return (
    <div className="App">
      <h1>Pokedex</h1>
      <Pokedex
        onPokeData={pokeData}
        onSearchPokemon={searchPokemonHandler}
        onSelectPokemon={selectPokemonHandler}
        selectedPokemon={selected}
      />
    </div>
  );
};

export default App;
