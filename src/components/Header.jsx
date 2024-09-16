import React from "react";
import styles from "./Header.module.css";
import logo from '/logotipo.svg'

const Header = () => {
  return (
    <header className={styles.header}>
      <img
        src={logo}
        alt="Linea Vitta"
        className={styles.logo}
      />
      <h1 className={styles.title}>Linea Vitta</h1>
    </header>
  );
};

export default Header;
