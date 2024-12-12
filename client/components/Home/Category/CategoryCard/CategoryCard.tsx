import styles from "./categoryCard.module.scss"; // SCSS
import { CategoryType } from "@/types"; // type
import { dm_serif_display } from "@/app/fonts"; // fonts

// components
import Button from "@/components/Button/Button";
const cardBgColor = `linear-gradient(0deg,rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)),linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%),`;

const CategoryCard = ({ image, title, priceInfo }: CategoryType) => {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `${cardBgColor} url(${image})` }}
    >
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <h1 className={dm_serif_display.className}>{title}</h1>
          <span>{priceInfo}</span>
        </div>
        <Button text="Shop Now" />
      </div>
    </div>
  );
};

export default CategoryCard;
