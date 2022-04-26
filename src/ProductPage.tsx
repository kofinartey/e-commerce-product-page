import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Carousel from "./components/carousel/Carousel";
import Header from "./components/header/Header";

import styles from "./ProductPage.module.css";
import plusIcon from "./assets/images/icon-plus.svg";
import minusIcon from "./assets/images/icon-minus.svg";
import cartIcon from "./assets/images/icon-cart.svg";
import Button from "./components/button/Button";
import { CartItemInterface } from "./types";

const product = {
  name: "Autum Limited Edition",
  price: 125.0,
  image: "/images/image-product-1-thumbnail.jpg",
};

function ProductPage() {
  const [cartData, setCartData] = useState<CartItemInterface[]>([]);
  const [items, setItems] = useState(0);

  //event handlers
  const addItem = () => {
    setItems((curstate) => curstate + 1);
  };
  const removeItem = () => {
    if (items === 0) return;
    setItems((curstate) => curstate - 1);
  };
  const addToCart = () => {
    if (items > 0) {
      setCartData((curState) => [
        ...curState,
        { ...product, id: uuidv4(), qty: items },
      ]);
    }
    setItems(0);
  };
  const removeFromCart = (id: string) => {
    console.log("remove called");
    console.log(id);
    setCartData((curState) => curState.filter((item) => item.id !== id));
  };

  return (
    <>
      <Header cartData={cartData} removeFromCart={removeFromCart} />
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
                <img src={minusIcon} onClick={removeItem} alt="" />
                <p>{items}</p>
                <img src={plusIcon} onClick={addItem} alt="" />
              </div>
              <Button leftIcon={cartIcon} onClick={addToCart}>
                Add to Cart
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default ProductPage;
