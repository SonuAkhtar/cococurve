import styles from "./banner.module.scss"; // SCSS
import { bannerPropsType } from "@/types"; // type

const Banner = ({ text }: bannerPropsType) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>{text}</div>
    </div>
  );
};

export default Banner;
