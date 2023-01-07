import { useState, useEffect } from "react";
import { pokemonListSchema } from "../../models/interfaces";

import classes from "./Pokecard.module.css";

const Pokecard: React.FC<{ name: string; spriteUrl: string }> = ({
  name,
  spriteUrl,
}) => {
  const [pokemon, setPokemon] = useState<pokemonListSchema>();

  useEffect(() => {
    fetch(spriteUrl)
      .then((response) => response.json())
      .then((data) => setPokemon(data));
  }, []);
  return (
    <div className={classes.pokecard}>
      <img
        className="pokemon-sprite"
        alt="pokemon"
        src={pokemon?.sprites.front_default}
      />
      <p>{pokemon?.name}</p>
    </div>
  );
};

export default Pokecard;
