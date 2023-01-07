import classes from "./Seachbox.module.css";

const Searchbox = () => {
  return (
    <input
      className={classes.search}
      type="text"
      placeholder="search pokemon..."
    />
  );
};

export default Searchbox;
