import styles from "./banner.module.scss";

const Banner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        Use FIRST15 to get 15% discount on your first order
      </div>
    </div>
  );
};

export default Banner;
