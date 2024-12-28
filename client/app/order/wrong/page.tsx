import Image from "next/image"; // Next
import styles from "./page.module.scss"; // SCSS

// components
import Button from "@/components/Button/Button";
import Newsletter from "@/components/Newsletter/Newsletter";

const OrderWrong = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.error_box}>
          <div className={styles.error_icon}>
            <Image
              src="/Images/order/wrong/order-wrong.png"
              alt="error image"
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
          <div className={styles.error_details}>
            <h2>Something has went wrong!</h2>
            <h5>
              For more details write us at <span>support@cococurve.in</span>
            </h5>
          </div>
          <Button text="Go back" />
        </div>
      </div>
      <Newsletter />
    </div>
  );
};

export default OrderWrong;
