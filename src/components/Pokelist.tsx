import { pokemonListSchema } from "../models/interfaces";

import React from "react";

const Pokelist: React.FC<{ pokeData: pokemonListSchema[] }> = ({
  pokeData,
}) => {
  console.log(pokeData);
  return (
    <div>
      <h5>Pokelist: </h5>
      <>
        {pokeData.map((pok) => {
          return <div>{pok.name}</div>;
        })}
      </>
    </div>
  );
};

export default Pokelist;
