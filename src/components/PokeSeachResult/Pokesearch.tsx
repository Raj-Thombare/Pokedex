import { useState, useEffect } from "react";
import { selectedPokemonSchema } from "../../models/interfaces";
import classes from "./PokeSearch.module.css";

const PokeSearch: React.FC<{
  selectedPokemon: string;
}> = ({ selectedPokemon }) => {
  const [pokemon, setPokemon] = useState<selectedPokemonSchema>();

  // console.log("selectedPokemon: ");
  // console.log(selectedPokemon);

  useEffect(() => {
    fetch(selectedPokemon)
      .then((response) => response.json())
      .then((data) => setPokemon(data));
  }, [selectedPokemon]);

  return (
    <div className={classes.pokeResultCard}>
      {selectedPokemon ? (
        <div>
          <img
            className={classes.pokemonAnimatedSprite}
            alt="pokemon"
            src={pokemon?.sprites.front_default}
          />
          <p className="text-capitalise">Name: {pokemon?.name}</p>
          <p>Height: {pokemon?.height}</p>
          <p>Weight: {pokemon?.weight}</p>
          <p>Base Exp: {pokemon?.base_experience}</p>
        </div>
      ) : (
        <h2>Welcome to the Pokedex</h2>
      )}
    </div>
  );
};

export default PokeSearch;
