import styles from "./newCollectionCard.module.scss";

// type
import { newCollectionType } from "@/types";

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
