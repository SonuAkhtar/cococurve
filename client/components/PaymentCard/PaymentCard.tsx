import styles from "./paymentCard.module.scss"; // SCSS
import Image from "next/image"; // Next
import { paymentCardPropsType } from "@/types"; //type

const PaymentCard = ({
  paymentMethod,
  setPaymentMethod,
  data,
}: paymentCardPropsType) => {
  return (
    <div
      onClick={() => setPaymentMethod(data.value)}
      className={`${styles.payment_card} ${
        paymentMethod === data.value && styles.selected
      }`}
    >
      <div className={styles.payment_method_type}>
        <span>
          <Image
            src={data.image}
            alt="confirm image"
            width={0}
            height={0}
            sizes="100vw"
          />
        </span>
        <span className={styles.payment_name}>
          <h3>{data.name}</h3>
          <h5>{data.info}</h5>
        </span>
      </div>
      <span className={styles.payment_check}>
        <Image
          src={`/Images/delivery/payment/${
            paymentMethod === data.value ? "check" : "uncheck"
          }.png`}
          alt="confirm image"
          width={0}
          height={0}
          sizes="100vw"
        />
      </span>
    </div>
  );
};

export default PaymentCard;
