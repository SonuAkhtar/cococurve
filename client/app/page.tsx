import styles from "./page.module.css";

// components
import Hero from "@/components/Home/Hero/Hero";
import Section from "@/components/Home/Section/Section";
import NewCollection from "@/components/Home/NewCollection/NewCollection";
import Sale from "@/components/Home/Sale/Sale";
import Arrivals from "@/components/Home/Arrivals/Arrivals";
import Budget from "@/components/Home/Budget/Budget";
import Category from "@/components/Home/Category/Category";
import Newsletter from "@/components/Home/Newsletter/Newsletter";

const Homepage = () => {
  return (
    <div className={styles.container}>
      <Hero />
      <Section />
      <NewCollection />
      <Sale />
      <Arrivals />
      <Budget />
      <Category />
      <Newsletter />
    </div>
  );
};

export default Homepage;
