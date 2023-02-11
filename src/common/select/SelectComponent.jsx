import Select from "react-select";
import styles from "./select.module.css";

const SelectComponent = ({ title, ...rest }) => {
  return (
    <div className={styles.selectWrapper}>
      <span>{title} </span>
      <Select className={styles.select} {...rest} />
    </div>
  );
};

export default SelectComponent;
