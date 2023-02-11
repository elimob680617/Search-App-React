import { useState } from "react";
import SearchBar from "../../common/search/SearchBar";
import SelectComponent from "../../common/select/SelectComponent";
import { useProductAction } from "../providers/ProductsProvider";
import styles from "./filter.module.css";

const filterOptions = [
  { value: "", label: "ALL" },
  { value: "XS", label: "XS" },
  { value: "S", label: "S" },
  { value: "M", label: "M" },
  { value: "L", label: "L" },
  { value: "XL", label: "XL" },
  { value: "XXL", label: "XXL" },
];

const sortOptions = [
  { value: "highest", label: "highest" },
  { value: "lowest", label: "lowest" },
];

const Filter = () => {
  const dispatch = useProductAction();
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("");

  const filterHandler = (selectedOption) => {
    console.log(selectedOption);
    dispatch({ type: "filter", selectedOption });
    dispatch({ type: "sort", selectedOption: sort });
    setFilter(selectedOption);
  };

  const sortHandler = (selectedOption) => {
    console.log(selectedOption);
    dispatch({ type: "sort", selectedOption });
    setSort(selectedOption);
  };

  return (
    <section>
      <SearchBar filter={filter} />

      <div className={styles.filter}>
        <div>
          <p>This is a Filter!</p>
        </div>

        <SelectComponent
          title={"Filter By Size"}
          value={filter}
          onChange={filterHandler}
          options={filterOptions}
        />
        <SelectComponent
          title={"Sort By Price"}
          value={sort}
          onChange={sortHandler}
          options={sortOptions}
        />
      </div>
    </section>
  );
};

export default Filter;
