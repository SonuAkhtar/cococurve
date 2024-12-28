"use client";

import { useState } from "react"; // React
import styles from "./page.module.scss"; // SCSS
import { userAddressData } from "@/appData"; // appData
import { useSelector } from "react-redux"; // redux
import { RootStateType } from "@/types"; // Redux-type

// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";

// components
import Newsletter from "@/components/Newsletter/Newsletter";
import Button from "@/components/Button/Button";
import PaymentCard from "@/components/PaymentCard/PaymentCard";

const DeliveryAddress = () => {
  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const addressStatus = useSelector(
    (state: RootStateType) => state.delivery.addressAdded
  );

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.address_header}>
          <h2>Enter delivery details</h2>
          <h5>Enter a new or choose one address from the followings</h5>
        </div>
        <main className={styles.main}>
          <div className={styles.address_recent}>
            <h3 className={styles.address_recent_title}>RECENT ADDRESSES</h3>
            <div className={styles.address_recent_list}>
              {userAddressData.map((data) => (
                <div key={data.id} className={styles.address_recent_listItem}>
                  <div className={styles.checkbox}>
                    <input type="checkbox" />
                  </div>
                  <div className={styles.address_box}>
                    <div className={styles.address_box_details}>
                      <div className={styles.address_details_personal}>
                        <span>{data.name}</span>
                        <FontAwesomeIcon icon={faCircle} />
                        <span>{data.phone}</span>
                        <FontAwesomeIcon icon={faCircle} />
                        <span>{data.email}</span>
                      </div>
                      <div className={styles.address_details_lines}>
                        <span>{data.addressLine1}</span>
                        <br />
                        <span>{data.addressLine2}</span>
                        <br />
                        <span>{data.addressLine3}</span>
                      </div>
                      <div className={styles.address_city_state}>
                        <span>{data.city},</span>
                        <span>{data.state},</span>
                        <span>{data.country},</span>
                        <br />
                        <span>{data.pincode}</span>
                      </div>
                    </div>
                    <div className={styles.address_box_buttons}>
                      <button className={styles.address_delete_button}>
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                      <button className={styles.address_edit_button}>
                        <FontAwesomeIcon icon={faPencil} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.address_recent_buttons}>
              <button className={styles.add_new_button}>Add New</button>
              <button className={`${styles.continue_button}`}>Continue</button>
            </div>
          </div>
          <div className={styles.address_or}>OR</div>
          <div className={styles.address_new}>New</div>
        </main>
      </div>
      <Newsletter />
    </div>
  );
};

export default DeliveryAddress;
