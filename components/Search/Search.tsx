import { useState } from "react";
import styles from "./Search.module.css";

export const Search = () => {
  const [search, setSearch] = useState("");
  return (
    <input
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className={styles.search}
      placeholder="Search..."
    />
  );
};
