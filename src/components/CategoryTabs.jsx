import React from "react";
import styles from "./CategoryTabs.module.css";

const categories = [
  "Doces",
  "Salgados",
  "Porções",
  "Capuccinos",
  "Bebidas",
];

const CategoryTabs = () => {
  return (
    <nav className={styles.categoryNav}>
      {categories.map((category, index) => (
        <button key={index} className={styles.categoryTab}>
          {category}
        </button>
      ))}
    </nav>
  );
};

export default CategoryTabs;
