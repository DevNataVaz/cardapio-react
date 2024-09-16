import React from "react";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <form className={styles.searchForm}>
      <label htmlFor="searchInput" className={styles.visuallyHidden}>
        Pesquise aqui
      </label>
      <input
        type="search"
        id="searchInput"
        className={styles.searchInput}
        placeholder="Pesquise aqui"
        aria-label="Pesquise aqui"
      />
      <button type="submit" className={styles.searchButton} aria-label="Buscar">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa5fb2680c162457d991fb6fb332164bd99c0035ee62e651ea28fbb647bf9478?placeholderIfAbsent=true&apiKey=cfee590cf60e49139e20301c1fa86f0e"
          alt=""
          className={styles.searchIcon}
        />
      </button>
    </form>
  );
};

export default SearchBar;
