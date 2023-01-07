import { pokemonListSchema } from "../models/interfaces";
import Pokecard from "./pokecard/Pokecard";
import React from "react";

const Pokelist: React.FC<{ pokeData: pokemonListSchema[] }> = ({
  pokeData,
}) => {
  // console.log(pokeData);
  return (
    <div>
      <h5>Pokelist: </h5>
      {pokeData.map((pokemon) => {
        return (
          <Pokecard key={pokemon.name} name={pokemon.name} url={pokemon.url} />
        );
      })}
    </div>
  );
};

export default Pokelist;
