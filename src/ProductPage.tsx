import React from "react";
import Carousel from "./components/carousel/Carousel";
import Header from "./components/header/Header";

import styles from "./ProductPage.module.css";
import plusIcon from "./assets/images/icon-plus.svg";
import minusIcon from "./assets/images/icon-minus.svg";
import cartIcon from "./assets/images/icon-cart.svg";
import Button from "./components/button/Button";

function ProductPage() {
  return (
    <>
      <Header />
      <main>
        <div className={styles.carouselContainer}>
          <Carousel />
        </div>

        <section className={styles.productDetails}>
          <div className={styles.wrapper}>
            <h4>SNEAKER COMPANY</h4>
            <h1>Fall Limited Edition Sneakers</h1>
            <p>
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they'll withstand
              everything the weather can offer.
            </p>

            <div className={styles.pricingWrapper}>
              <p className={styles.price}>$125.00</p>
              <p className={styles.discount}>50%</p>
              <p className={styles.initialPrice}>$250.00</p>
            </div>

            <div className={styles.buttonsWrapper}>
              <div className={styles.itemCount}>
                <img src={minusIcon} alt="" />
                <p>0</p>
                <img src={plusIcon} alt="" />
              </div>
              <Button leftIcon={cartIcon}>Add to Cart</Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default ProductPage;
