import React from "react";
import styles from "@/components/Ecomwidget.module.css";
import EcomWidgetCard from "./EcomWidgetCard";
import Image from "next/image";
import Link from "next/link";
const EcomWidgetProductGrid = () => {
  return (
    <div>
      <div
        className={`${styles.EcomWidgetGridWrapper} ${styles.EcomWidgetProductGridWrapper}`}
      >
        <EcomWidgetCard imgSrc="/220908-gucci-x-gq-mo3-0041-v3-1.webp" />
        <div className={styles.EcomPrdGrid}>
          <div className={styles.EcomPrdGridImgCntr}>
            <Image
              width={1000}
              height={1000}
              src="/dfubt0jl0fqb6awf06ue.webp"
              alt=""
            />
            <div className={styles.EcomWidgetcard_contentWrapper}>
              <div className={styles.EcomWidgetcard_content}>
                <Link href="" className={styles.EcomWidgetcard_button}>
                  Shop
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.EcomPrdGridImgCntr}>
            <Image
              width={1000}
              height={1000}
              src="/q5rmlpgcmfnaqcoimgtu.webp"
              alt=""
            />
             <div className={styles.EcomWidgetcard_contentWrapper}>
              <div className={styles.EcomWidgetcard_content}>
                <Link href="" className={styles.EcomWidgetcard_button}>
                  Shop
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.EcomPrdGridImgCntr}>
            <Image
              width={1000}
              height={1000}
              src="/t2tydn9jsxbrb5oh82hs.webp"
              alt=""
            />
             <div className={styles.EcomWidgetcard_contentWrapper}>
              <div className={styles.EcomWidgetcard_content}>
                <Link href="" className={styles.EcomWidgetcard_button}>
                  Shop
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.EcomPrdGridImgCntr}>
            <Image
              width={1000}
              height={1000}
              src="/jn0euaqz2i0yhqw7usww.webp"
              alt=""
            />
            <div className={styles.EcomWidgetcard_contentWrapper}>
              <div className={styles.EcomWidgetcard_content}>
                <Link href="" className={styles.EcomWidgetcard_button}>
                  Shop
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcomWidgetProductGrid;
