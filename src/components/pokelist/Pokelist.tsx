import { pokemonListSchema } from "../../models/interfaces";
import Pokecard from "../pokecard/Pokecard";

import classes from "./Pokelist.module.css";

const Pokelist: React.FC<{ pokeData: pokemonListSchema[] }> = ({
  pokeData,
}) => {
  return (
    <div className={classes.pokelist}>
      {pokeData.map((pokemon) => {
        return (
          <Pokecard key={pokemon.name} name={pokemon.name} url={pokemon.url} />
        );
      })}
    </div>
  );
};

export default Pokelist;
