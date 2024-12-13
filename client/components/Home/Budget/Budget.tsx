import styles from "./budget.module.scss"; //SCSS
import { budgetData } from "@/appData"; // appData

// component
import Button from "@/components/Button/Button";
import BudgetCard from "./BudgetCard/BudgetCard";

const Budget = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h4 className={styles.title}>FASHION UNDER BUDGET</h4>
          <h1 className={styles.offer}>BUDGET UNDER 999.</h1>
        </div>
        <div className={styles.cards_wrapper}>
          <div className={styles.cards}>
            {budgetData.map((item) => (
              <BudgetCard
                key={item.id}
                id={item.id}
                image={item.image}
                rating={item.rating}
                title={item.title}
                newPrice={item.newPrice}
                oldPrice={item.oldPrice}
                off={item.off}
              />
            ))}
          </div>
        </div>
        <Button text="View All" />
      </div>
    </div>
  );
};

export default Budget;
