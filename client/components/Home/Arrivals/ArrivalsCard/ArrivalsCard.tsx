import styles from "./arrivalsCard.module.scss"; //SCSS
import { arrivalsItem } from "@/types"; //type

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
