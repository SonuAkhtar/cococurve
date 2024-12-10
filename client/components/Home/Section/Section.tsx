import Button from "@/components/Button/Button";
import styles from "./section.module.scss";

const Section = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.women}>
          <div className={styles.title}>
            <span>SHOP FOR</span>
            <h1>WOMEN</h1>
          </div>
          <Button text="Shop Now" />
        </div>
        <div className={styles.men}>
          <div className={styles.title}>
            <span>SHOP FOR</span>
            <h1>MEN</h1>
          </div>
          <Button text="Shop Now" />
        </div>
      </div>
    </div>
  );
};

export default Section;
