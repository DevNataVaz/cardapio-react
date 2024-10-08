import React from "react";
import styles from "./RecommendationSection.module.css";
import choconup from '/choconup.jpg'
import frozen from '/frozen-mocha.jpg'
import panqueca from '/panqueca-de-carne.jpg'

const recommendations = [
  {
    image:
      choconup,
    name: "Choconup",
    price: "R$9,90",
  },
  {
    image:
    panqueca,
    name: "Panqueca de Carne",
    price: "R$15,90",
  },
  {
    image:
      frozen,
    name: "Fronzen Mocha",
    price: "R$29,90",
  },
];

const RecommendationSection = () => {
  return (
    <section className={styles.recommendationSection}>
      <h2 className={styles.sectionTitle}>Recomendações do chefe</h2>
      <div className={styles.recommendationList}>
        {recommendations.map((item, index) => (
          <article key={index} className={styles.recommendationCard}>
            <img
              src={item.image}
              alt={item.name}
              className={styles.itemImage}
            />
            <h3 className={styles.itemName}>{item.name}</h3>
            <p className={styles.itemPrice}>{item.price}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default RecommendationSection;
