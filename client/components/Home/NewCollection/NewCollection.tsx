import styles from "./newCollection.module.scss";

const NewCollection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.infoBox}>
            <h1 className={styles.title}>
              NEW <br /> ARRIVALS
            </h1>
            <div className={styles.price}>Starts from just INR 899</div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.infoBox}>
            <h1 className={styles.title}>
              SUMMER’24 <br /> WARDROBE
            </h1>
            <div className={styles.price}>Starts from just INR 899</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCollection;
