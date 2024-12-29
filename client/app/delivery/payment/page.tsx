"use client";

import { useState } from "react"; // React
import styles from "./page.module.scss"; // SCSS
import { useSelector } from "react-redux"; // redux
import { RootStateType } from "@/types"; // Redux-type

import useFetchData from "@/utils/useFetchData"; // customHook
import { ApiRespDataType } from "@/types"; // type

// components
import Newsletter from "@/components/Newsletter/Newsletter";
import Button from "@/components/Button/Button";
import PaymentCard from "@/components/PaymentCard/PaymentCard";

const DeliveryPayment = () => {
  const [paymentMethod, setPaymentMethod] = useState<string>("");
  // const addressStatus = useSelector(
  //   (state: RootStateType) => state.delivery.addressAdded
  // );

  // fetch API data
  const { data, loadingData } = useFetchData("/data/appData.json");
  if (!data) return null;
  const { paymentMethodData } = data as ApiRespDataType;

  if (loadingData) return <div>Loading data...</div>;

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <main className={styles.main}>
          <div className={styles.payment_method}>
            <div className={styles.payment_method_header}>
              <h2>Select a Payment method</h2>
              <h5>Choose one of the payment gateway from the given options.</h5>
            </div>

            <div className={styles.payment_method_cards}>
              {paymentMethodData.map((data) => (
                <PaymentCard
                  key={data.id}
                  paymentMethod={paymentMethod}
                  setPaymentMethod={setPaymentMethod}
                  data={data}
                />
              ))}
            </div>

            <h5 className={styles.payment_method_terms}>
              Payments through us are secured. Refer to our terms and conditions
            </h5>
          </div>
          <div className={styles.payment_summery}>
            <div className={styles.payment_summery_box}>
              <div className={styles.payment_summery_box_item}>
                <span className={styles.name}>Order total</span>
                <h3>
                  <span>INR</span> 1,500
                </h3>
              </div>
              <div className={styles.payment_summery_box_item}>
                <span className={styles.name}>Delivery</span>
                <h3>
                  <span>INR</span> 200
                </h3>
              </div>
              <div className={styles.payment_summery_box_item}>
                <span className={styles.name}>COD Charges</span>
                <h3>
                  <span>INR</span> 200
                </h3>
              </div>
              <div className={styles.payment_summery_box_item}>
                <span className={styles.name}>Coupon</span>
                <h3>
                  <span>INR</span> 425
                </h3>
              </div>
              <div className={styles.payment_summery_box_item}>
                <span className={styles.name}>Amount Payable</span>
                <h3>
                  <span>INR</span> 1,200
                </h3>
              </div>
            </div>
            <Button text="Pay 1,225" />
          </div>
        </main>
      </div>
      <Newsletter />
    </div>
  );
};

export default DeliveryPayment;
