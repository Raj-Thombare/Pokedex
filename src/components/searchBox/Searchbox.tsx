import classes from "./Seachbox.module.css";

const Searchbox: React.FC<{ searchPokemon: (text: string) => void }> = ({
  searchPokemon,
}) => {
  return (
    <input
      className={classes.search}
      type="text"
      placeholder="Search Pokemon..."
      onChange={(e) => searchPokemon(e.target.value)}
    />
  );
};

export default Searchbox;
