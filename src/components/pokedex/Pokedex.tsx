import { pokemonListSchema } from "../../models/interfaces";
import Pokelist from "../Pokelist";

import classes from "./Pokedex.module.css";

const Pokedex: React.FC<{ onPokeData: pokemonListSchema[] }> = ({
  onPokeData,
}) => {
  return (
    <div className={classes.pokedexContainer}>
      {/* search */}
      {/* pokeList */}
      <div className={classes.pokelistContainer}>
        <Pokelist pokeData={onPokeData} />
      </div>
      {/* pokemonSearch */}
    </div>
  );
};

export default Pokedex;
