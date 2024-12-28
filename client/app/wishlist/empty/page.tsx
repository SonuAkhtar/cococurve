import Image from "next/image"; // Next
import styles from "./page.module.scss"; // SCSS

// components
import Newsletter from "@/components/Newsletter/Newsletter";

const WishlistEmtpy = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.wishlist_box}>
          <h1>My wishlist</h1>
          <div className={styles.wishlist_image}>
            <Image
              src="/Images/wishlist/empty/wishlist-empty.png"
              alt="empty  wishlistimage"
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
        </div>
      </div>
      <Newsletter />
    </div>
  );
};

export default WishlistEmtpy;
