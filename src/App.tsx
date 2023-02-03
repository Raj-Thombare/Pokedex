import React, { useState, useEffect } from "react";
import Pokedex from "./components/pokedex/Pokedex";
import { pokemonDataSchema } from "./models/interfaces";
import { BASE_URL } from "./adapters/api";

const App: React.FC = () => {
  const [pokeData, setPokeData] = useState<pokemonDataSchema[]>([]);
  const [selected, setSelected] = useState<string>("");
  const [searchField, setSearchField] = useState<string>("");

  const searchPokemonHandler = (text: string) => {
    setSearchField(text);
    const searchedPokemon = pokeData?.filter((pokemon) => {
      return (
        pokemon.name &&
        pokemon.name.toLowerCase().includes(searchField.toLowerCase())
      );
    });
    setPokeData(searchedPokemon);
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`${BASE_URL}?limit=151`);
        const data = await response.json();
        setPokeData(data.results);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    searchPokemonHandler(searchField);
  }, [searchField]);

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
