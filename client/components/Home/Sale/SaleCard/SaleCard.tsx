import styles from "./saleCard.module.scss"; //SCSS
import { SaleType } from "@/types"; // type

// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";

const SaleCard = ({
  image,
  rating,
  title,
  newPrice,
  oldPrice,
  off,
}: SaleType) => {
  return (
    <div className={styles.container}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className={styles.rating}>
          {rating}
          <FontAwesomeIcon icon={faStar} />
        </div>
        <FontAwesomeIcon icon={faHeart} />
      </div>
      <div className={styles.info}>
        <h4>{title}</h4>
        <div className={styles.priceOffer}>
          <div className={styles.price}>
            <span className={styles.currency}>INR</span>
            <div className={styles.newPrice}>{newPrice}</div>
            <span className={styles.oldPrice}>{oldPrice}</span>
          </div>
          <div className={styles.offer}>{off}% Off</div>
        </div>
      </div>
    </div>
  );
};

export default SaleCard;
