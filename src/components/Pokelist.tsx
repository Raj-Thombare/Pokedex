import { pokemonSchema } from "../App";

const Pokelist: React.FC<{ onPokeData: pokemonSchema[] }> = ({
  onPokeData,
}) => {
  return (
    <div>
      {onPokeData.map((pokemon) => {
        <div>
          <h3>{pokemon.name}</h3>
          <img src={pokemon.url} />
        </div>;
      })}
    </div>
  );
};

export default Pokelist;
