
import React from "react";
import styles from "./ScrollToTop.module.css";
import arrow from '/arrow.png'

const ScrollToTop = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={styles.scrollToTop}
      onClick={handleScrollToTop}
      aria-label="Voltar ao topo"
    >
      <img src={arrow} className={styles.scrollIcon} />
    </button>
  );
};

export default ScrollToTop;
