import { useState } from "react";
import { useProductAction } from "../../components/providers/ProductsProvider";
import styles from "./search.module.css";

const SearchBar = ({ filter }) => {
  const dispatch = useProductAction();
  const [value, setValue] = useState("");
  const changeHandler = (e) => {
    console.log(filter);
    dispatch({ type: "filter", selectedOption: filter });
    dispatch({ type: "search", event: e });
    setValue(e.target.value);
  };
  return (
    <div className={styles.formControl}>
      <div>Search For</div>
      <input
        type="text"
        onChange={changeHandler}
        value={value}
        placeholder="search for..."
      />
    </div>
  );
};

export default SearchBar;
