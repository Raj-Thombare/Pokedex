import React, { useState, useEffect } from "react";
import Pokedex from "./components/pokedex/Pokedex";
import { pokemonDataSchema } from "./models/interfaces";
import { BASE_URL } from "./adapters/api";

const App: React.FC = () => {
  const [pokeData, setPokeData] = useState<pokemonDataSchema[]>([]);
  const [searchedPokemons, setSearchedPokemons] = useState<pokemonDataSchema[]>(
    []
  );
  const [selected, setSelected] = useState<string>("");
  const [searchField, setSearchField] = useState<string>("");

  const searchPokemonHandler = (text: string) => {
    const searchedPokemon = pokeData.filter((pokemon) => {
      return searchField === ""
        ? pokemon
        : pokemon.name.toLowerCase().includes(searchField);
    });

    setSearchField(text);
    setSearchedPokemons(searchedPokemon);
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`${BASE_URL}?limit=151`);
        const data = await response.json();
        setPokeData(data.results);
        setSearchedPokemons(data.results);
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
        onPokeData={searchedPokemons}
        onSearchPokemon={searchPokemonHandler}
        onSelectPokemon={selectPokemonHandler}
        selectedPokemon={selected}
      />
    </div>
  );
};

export default App;
