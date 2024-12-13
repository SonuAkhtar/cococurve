import styles from "./hero.module.scss"; //SCSS
import { dm_serif_display } from "@/app/fonts"; // fonts

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
        <div className={`${styles.title} ${dm_serif_display.className}`}>
          Steal the deal <br /> of the hour!
        </div>
        <div className={styles.terms}>Terms and conditions apply*</div>
        <Button text="Shop Now" />
      </div>
    </div>
  );
};

export default Hero;
