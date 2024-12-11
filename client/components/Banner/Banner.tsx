import styles from "./banner.module.scss";

// type
import { bannerType } from "@/types";

const Banner = ({ text }: bannerType) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>{text}</div>
    </div>
  );
};

export default Banner;
