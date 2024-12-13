import styles from "./newCollectionCard.module.scss"; // SCSS
import { newCollectionType } from "@/types"; // type

const NewCollectionCard = ({ title, price, image }: newCollectionType) => {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className={styles.infoBox}>
        <h1>{title}</h1>
        <div className={styles.price}>Starts from just INR {price}</div>
      </div>
    </div>
  );
};

export default NewCollectionCard;
