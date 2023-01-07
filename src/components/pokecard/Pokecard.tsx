import { useState, useEffect } from "react";
import { pokemonListSchema } from "../../models/interfaces";

import classes from "./Pokecard.module.css";

const Pokecard: React.FC<{ name: string; url: string }> = ({ name, url }) => {
  const [pokemon, setPokemon] = useState<pokemonListSchema>();

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPokemon(data));
  }, []);

  console.log(pokemon);
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
