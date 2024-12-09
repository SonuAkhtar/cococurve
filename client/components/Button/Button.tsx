import styles from "./button.module.scss";

const Button = (props: any) => {
  return <button className={styles.container}>{props.text}</button>;
};

export default Button;
