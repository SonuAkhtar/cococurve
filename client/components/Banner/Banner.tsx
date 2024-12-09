import styles from "./banner.module.scss";

const Banner = (props: any) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>{props.text}</div>
    </div>
  );
};

export default Banner;
