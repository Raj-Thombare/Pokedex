import { pokemonListSchema } from "../models/interfaces";
import Pokelist from "./Pokelist";

const Pokedex: React.FC<{ onPokeData: pokemonListSchema[] }> = ({
  onPokeData,
}) => {
  return (
    <div>
      {/* search */}
      {/* pokeList */}
      <Pokelist pokeData={onPokeData} />
      {/* pokemon */}
    </div>
  );
};

export default Pokedex;
