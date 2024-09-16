
import React from "react";
import styles from "./MenuSection.module.css";

const MenuSection = ({ title, items }) => {
  return (
    <section className={styles.menuSection}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      {items.map((item, index) => (
        <article key={index} className={styles.menuItem}>
          <img src={item.image} alt={item.name} className={styles.itemImage} />
          <div className={styles.itemDetails}>
            <h3 className={styles.itemName}>{item.name}</h3>
            <p className={styles.itemDescription}>{item.description}</p>
            <p className={styles.itemPrice}>{item.price}</p>
          </div>
        </article>
      ))}
    </section>
  );
};

export default MenuSection;
