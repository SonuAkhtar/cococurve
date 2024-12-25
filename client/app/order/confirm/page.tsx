import Image from "next/image";
import styles from "./page.module.scss"; // SCSS

// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-regular-svg-icons";

// components
import Button from "@/components/Button/Button";

const OrderConfirm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.confirm_box}>
          <div className={styles.confirm_icon}>
            <Image
              src="/Images/order/confirm/confirm.png"
              alt="confirm image"
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
          <div className={styles.confirm_details}>
            <h2>Your order is confirmed!</h2>
            <h5>
              Reference ID: {`23267363722`} <FontAwesomeIcon icon={faCopy} />
            </h5>
          </div>
          <Button text="Track your order" />
        </div>
      </div>
    </div>
  );
};

export default OrderConfirm;
