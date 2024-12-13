import styles from "./arrivals.module.scss"; // SCSS
import { arrivalsData } from "@/appData"; // appData

// component
import ArrivalsCard from "./ArrivalsCard/ArrivalsCard";

const Arrivals = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.cards}>
          <div className={styles.cards_left}>
            {arrivalsData?.left?.map((item) => (
              <ArrivalsCard key={item.id} id={item.id} image={item.image} />
            ))}
          </div>
          <div className={styles.cards_right}>
            {arrivalsData?.right?.map((item) => (
              <ArrivalsCard key={item.id} id={item.id} image={item.image} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Arrivals;
