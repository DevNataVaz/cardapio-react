
import React from "react";
import styles from "./App.module.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import CategoryTabs from "./components/CategoryTabs";
import RecommendationSection from "./components/RecommendationSection";
import MenuSection from "./components/MenuSection";
import ScrollToTop from "./components/ScrollToTop";
import { doces, salgados, porcoesData, pratosFeitosData, bebidasData } from './menuData';

const App = () => {

  return (
    <>
  <div className={styles.menuCard}>
      <Header />
      <section className={styles.menuContent}>
        <SearchBar />
        <CategoryTabs />
        <RecommendationSection />
        <MenuSection title="Doces" items={doces} />
        <MenuSection title="Salgados" items={salgados} />
        {/* <MenuSection title="Porções" items={porcoesData} />
        <MenuSection title="Pratos feitos" items={pratosFeitosData} /> */}
        <MenuSection title="Bebidas" items={bebidasData} />
        <ScrollToTop />
      </section>
    </div>
    </>  
  );
};

export default App;
