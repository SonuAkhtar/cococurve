import styles from "./button.module.scss"; // SCSS
import { buttonPropsType } from "@/types"; // type

const Button = ({ text }: buttonPropsType) => {
  return <button className={styles.container}>{text}</button>;
};

export default Button;
