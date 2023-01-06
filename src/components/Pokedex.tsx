import { pokemonSchema } from "../models/interfaces";
import Pokelist from "./Pokelist";

const Pokedex: React.FC<{ onPokeData: pokemonSchema[] }> = ({ onPokeData }) => {
  console.log(onPokeData);
  return (
    <div>
      {/* search */}
      {/* pokeList */}
      <Pokelist onPokeData={onPokeData} />
      {/* pokeSearch */}
    </div>
  );
};

export default Pokedex;
