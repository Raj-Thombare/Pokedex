import { pokemonDataSchema } from "../../models/interfaces";
import Pokelist from "../pokelist/Pokelist";
import Searchbox from "../searchBox/Searchbox";

import classes from "./Pokedex.module.css";

const Pokedex: React.FC<{
  onPokeData: pokemonDataSchema[];
  onSearchPokemon: (text: string) => void;
}> = ({ onPokeData, onSearchPokemon }) => {
  return (
    <div className={classes.pokedexContainer}>
      <div className={classes.pokelistContainer}>
        <Searchbox searchPokemon={onSearchPokemon} />
        <Pokelist pokeData={onPokeData} />
      </div>
      <div className={classes.pokedexSearch}>{/* pokemonSearch */}</div>
    </div>
  );
};

export default Pokedex;
