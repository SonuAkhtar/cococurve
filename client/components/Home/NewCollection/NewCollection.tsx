import styles from "./newCollection.module.scss"; //SCSS
import { newCollectionData } from "@/appData"; // appData

// component
import NewCollectionCard from "./NewCollectionCard/NewCollectionCard";

const NewCollection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {newCollectionData.map((item) => (
          <NewCollectionCard
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default NewCollection;
