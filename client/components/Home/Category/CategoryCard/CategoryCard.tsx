import styles from "./categoryCard.module.scss";

// type
import { CategoryType } from "@/types";

// components
import Button from "@/components/Button/Button";

const CategoryCard = ({ id, image, title, priceInfo }: CategoryType) => {
  return (
    <div
      key={id}
      className={styles.container}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <h1>{title}</h1>
          <span>{priceInfo}</span>
        </div>
        <Button text="Shop Now" />
      </div>
    </div>
  );
};

export default CategoryCard;
