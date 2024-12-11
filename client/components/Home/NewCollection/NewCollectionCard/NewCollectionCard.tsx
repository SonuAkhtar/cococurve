import styles from "./newCollectionCard.module.scss";

// type
import { newCollectionType } from "@/types";

const NewCollectionCard = ({ image }: newCollectionType) => {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className={styles.infoBox}>
        <h1 className={styles.title}>
          NEW <br /> ARRIVALS
        </h1>
        <div className={styles.price}>Starts from just INR 899</div>
      </div>
    </div>
  );
};

export default NewCollectionCard;
