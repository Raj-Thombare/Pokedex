import { useState, useEffect } from "react";
import { selectedPokemonSchema } from "../../models/interfaces";
import classes from "./PokemonSearchResult.module.css";

const PokemonSearch: React.FC<{
  selectedPokemon: string;
}> = ({ selectedPokemon }) => {
  const [pokemon, setPokemon] = useState<selectedPokemonSchema>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (selectedPokemon) {
      (async () => {
        try {
          setLoading(true);
          const response = await fetch(selectedPokemon);
          const data = await response.json();
          setPokemon(data);
          setLoading(false);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [selectedPokemon]);

  return (
    <div className={classes.pokeResultCard}>
      {selectedPokemon ? (
        <div>
          {!loading ? (
            <>
              <img
                className={classes.pokemonSprite}
                alt="pokemon"
                src={pokemon?.sprites.front_default}
              />
              <p className={classes.textCapitalise}>Name: {pokemon?.name}</p>
              <p>Height: {pokemon?.height}</p>
              <p>Weight: {pokemon?.weight}</p>
              <p>Base Exp: {pokemon?.base_experience}</p>
            </>
          ) : (
            <div className={classes["lds-ring"]}>
              <div></div>
              <div></div>
            </div>
          )}
        </div>
      ) : (
        <h2>Welcome to the Pokedex</h2>
      )}
    </div>
  );
};

export default PokemonSearch;
