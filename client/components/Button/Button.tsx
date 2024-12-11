import styles from "./button.module.scss";

// type
import { buttonType } from "@/types";

const Button = ({ text }: buttonType) => {
  return <button className={styles.container}>{text}</button>;
};

export default Button;
