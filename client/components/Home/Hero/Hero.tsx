import Navbar from "@/components/Navbar/Navbar";
import styles from "./hero.module.scss";

// components
import Button from "@/components/Button/Button";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.sale}>
          <span className={styles.saleTitle}>Independence day sale</span>
          <span className={styles.timer}>12:26:21</span>
        </div>
        <div className={styles.title}>Steal the deal of the hour!</div>
        <div className={styles.terms}>Terms and conditions apply*</div>
        <Button text="Shop Now" />
      </div>
    </div>
  );
};

export default Hero;
