"use client";

//import { useState } from "react"; // React
import styles from "./page.module.scss"; // SCSS
import useFetchData from "@/utils/useFetchData"; // customHook
import { ApiRespDataType } from "@/types"; // type
//import { userAddressInputType } from "@/types"; // type

// components
import Newsletter from "@/components/Newsletter/Newsletter";
import AddressCard from "@/components/AddressCard/AddressCard";

const DeliveryAddress = () => {
  // const [addressValue, setAddressValue] = useState<userAddressInputType>({
  //   name: "",
  //   phone: "",
  //   email: "",
  //   addressLine1: "",
  //   addressLine2: "",
  //   addressLine3: "",
  //   city: "",
  //   state: "",
  //   country: "",
  //   pincode: "",
  // });

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

          <div className={styles.address_new}>
            <form>
              <div className={styles.address_new_personal}>
                <h3 className={styles.address_new_personal_title}>
                  PERSONAL DETAILS
                </h3>
                <div className={styles.input_box}>
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" placeholder="Enter full name" />
                </div>

                <div className={styles.multiple_input_box}>
                  <div className={styles.input_box}>
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="text"
                      id="phone"
                      placeholder="Enter phone number"
                    />
                  </div>

                  <div className={styles.input_box}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Enter email" />
                  </div>
                </div>
              </div>

              <div className={styles.address_new_details}>
                <h3 className={styles.address_new_details_title}>
                  ADDRESS DETAILS
                </h3>
                <div className={styles.input_box}>
                  <label htmlFor="addressLine1">Address line 1</label>
                  <input
                    type="text"
                    id="addressLine1"
                    placeholder="Enter address"
                  />
                </div>
                <div className={styles.input_box}>
                  <label htmlFor="addressLine2">Address line 2</label>
                  <input
                    type="text"
                    id="addressLine2"
                    placeholder="Enter address"
                  />
                </div>
                <div className={styles.input_box}>
                  <label htmlFor="addressLine3">Address line 3</label>
                  <input
                    type="text"
                    id="addressLine3"
                    placeholder="Enter address"
                  />
                </div>

                <div className={styles.multiple_input_box}>
                  <div className={styles.input_box}>
                    <label htmlFor="country">Country</label>
                    <input
                      type="text"
                      id="country"
                      placeholder="Enter Country"
                    />
                  </div>

                  <div className={styles.input_box}>
                    <label htmlFor="state">State</label>
                    <input type="text" id="state" placeholder="Enter state" />
                  </div>
                </div>

                <div className={styles.multiple_input_box}>
                  <div className={styles.input_box}>
                    <label htmlFor="city">City</label>
                    <input type="text" id="city" placeholder="Enter city" />
                  </div>

                  <div className={styles.input_box}>
                    <label htmlFor="pincode">Pin Code</label>
                    <input
                      type="number"
                      maxLength={6}
                      id="pincode"
                      placeholder="Enter pincode"
                    />
                  </div>
                </div>
              </div>

              <button>Continue</button>
            </form>
          </div>
        </main>
      </div>
      <Newsletter />
    </div>
  );
};

export default DeliveryAddress;
