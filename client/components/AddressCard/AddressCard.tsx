import styles from "./addressCard.module.scss"; // SCSS
import { addressCardPropsType } from "@/types"; // type

// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";

const AddressCard = ({
  name,
  phone,
  email,
  addressLine1,
  addressLine2,
  addressLine3,
  city,
  state,
  country,
  pincode,
}: addressCardPropsType) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.checkbox}>
        <input type="checkbox" />
      </div>
      <div className={styles.address_box}>
        <div className={styles.address_box_details}>
          <div className={styles.address_details_personal}>
            <span>{name}</span>
            <FontAwesomeIcon icon={faCircle} />
            <span>{phone}</span>
            <FontAwesomeIcon icon={faCircle} />
            <span>{email}</span>
          </div>
          <div className={styles.address_details_lines}>
            <span>{addressLine1}</span>
            <br />
            <span>{addressLine2}</span>
            <br />
            <span>{addressLine3}</span>
          </div>
          <div className={styles.address_city_state}>
            <span>{city},</span>
            <span>{state},</span>
            <span>{country},</span>
            <br />
            <span>{pincode}</span>
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
  );
};

export default AddressCard;
