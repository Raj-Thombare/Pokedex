import { useState, useEffect } from "react";
import { pokemonListSchema } from "../../models/interfaces";

import classes from "./Pokecard.module.css";

const Pokecard: React.FC<{
  name: string;
  spriteUrl: string;
  onClick: (data: string) => void;
}> = ({ name, spriteUrl, onClick }) => {
  const [pokemon, setPokemon] = useState<pokemonListSchema>();

  useEffect(() => {
    fetch(spriteUrl)
      .then((response) => response.json())
      .then((data) => setPokemon(data));
  }, []);

  return (
    <div className={classes.pokecard}>
      {pokemon ? (
        <>
          <img
            alt="pokemon"
            src={pokemon.sprites.front_default}
            onClick={(e) => onClick(spriteUrl)}
          />
          <p>{pokemon.name}</p>
        </>
      ) : (
        <div className={classes.ldsRipple}>
          <div></div>
          <div></div>
        </div>
      )}
    </div>
  );
};

export default Pokecard;
