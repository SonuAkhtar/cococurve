import styles from "./arrivalsCard.module.scss";

// type
import { arrivalsItem } from "@/types";

const ArrivalsCard = ({ image }: arrivalsItem) => {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${image})` }}
    >
      <h3 className={styles.title}>NEW ARRIVAL</h3>
    </div>
  );
};

export default ArrivalsCard;
