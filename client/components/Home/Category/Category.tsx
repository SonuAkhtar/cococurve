import styles from "./category.module.scss";

// appData
import { categoryData } from "@/appData";
import CategoryCard from "./CategoryCard/CategoryCard";

const Category = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {categoryData.map((item) => (
          <CategoryCard
            key={item.id}
            image={item.image}
            title={item.title}
            priceInfo={item.priceInfo}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;
