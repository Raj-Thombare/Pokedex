import { pokemonDataSchema } from "../../models/interfaces";
import Pokelist from "../pokelist/Pokelist";
import Searchbox from "../searchBox/Searchbox";
import PokemonSearchResult from "../PokeSeachResult/PokemonSearchResult";
import classes from "./Pokedex.module.css";

const Pokedex: React.FC<{
  onPokeData: pokemonDataSchema[];
  onSearchPokemon: (text: string) => void;
  onSelectPokemon: (data: string) => void;
  selectedPokemon: string;
}> = ({ onPokeData, onSearchPokemon, onSelectPokemon, selectedPokemon }) => {
  return (
    <div className={classes.pokedexContainer}>
      <div className={classes.pokelistContainer}>
        <Searchbox searchPokemon={onSearchPokemon} />
        <Pokelist pokeData={onPokeData} selectPokemon={onSelectPokemon} />
      </div>
      <div className={classes.pokedexSearch}>
        <PokemonSearchResult selectedPokemon={selectedPokemon} />
      </div>
    </div>
  );
};

export default Pokedex;
