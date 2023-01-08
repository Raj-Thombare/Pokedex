import { pokemonDataSchema } from "../../models/interfaces";
import Pokecard from "../pokecard/Pokecard";

import classes from "./Pokelist.module.css";

const Pokelist: React.FC<{
  pokeData: pokemonDataSchema[];
  selectPokemon: (data: string) => void;
}> = ({ pokeData, selectPokemon }) => {
  return (
    <div className={classes.pokelist}>
      {pokeData.map((pokemon) => {
        return (
          <Pokecard
            key={pokemon.name}
            name={pokemon.name}
            spriteUrl={pokemon.url}
            onClick={selectPokemon}
          />
        );
      })}
    </div>
  );
};

export default Pokelist;
