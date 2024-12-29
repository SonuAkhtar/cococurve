"use client";

import styles from "./page.module.scss"; // SCSS
import useFetchData from "@/utils/useFetchData"; // customHook
import { ApiRespDataType } from "@/types"; // type

// components
import Newsletter from "@/components/Newsletter/Newsletter";
import AddressCard from "@/components/AddressCard/AddressCard";

const DeliveryAddress = () => {
  // fetch API data
  const { data, loadingData } = useFetchData("/data/appData.json");
  if (!data) return null;
  const { userAddressCardData } = data as ApiRespDataType;

  if (loadingData) return <div>Loading data...</div>;

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
              {userAddressCardData.map((data) => (
                <AddressCard
                  key={data.id}
                  id={data.id}
                  name={data.name}
                  phone={data.phone}
                  email={data.email}
                  addressLine1={data.addressLine1}
                  addressLine2={data.addressLine2}
                  addressLine3={data.addressLine3}
                  city={data.city}
                  state={data.state}
                  country={data.country}
                  pincode={data.pincode}
                />
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
