import React from "react";
import styles from "./Cart.module.css";
import deleteIcon from "../../assets/images/icon-delete.svg";
import { CartItemInterface } from "../../types/index";
import Button from "../button/Button";

type CartProps = {
  cartData: CartItemInterface[];
  removeFromCart: (a: string) => void;
};

function Cart({ cartData, removeFromCart }: CartProps) {
  const empty = <p className={styles.empty}>Your cart is empty</p>;

  const renderCartItems = cartData.map((item) => (
    <div key={item.id} className={styles.cartItems}>
      <div className={styles.item}>
        <img src={process.env.PUBLIC_URL + `${item.image}`} alt={item.name} />
        <div>
          <p>{item.name}</p>
          <p>
            ${item.price.toFixed(2)} x {item.qty}{" "}
            <span className={styles.total}>
              ${(item.price * item.qty).toFixed(2)}
            </span>
          </p>
        </div>
        <img
          src={deleteIcon}
          className={styles.deleteIcon}
          onClick={() => removeFromCart(item.id)}
          alt="delete icon"
        />
      </div>
      <Button>Checkout</Button>
    </div>
  ));

  return (
    <div className={styles.Cart}>
      <p className={styles.title}>Cart</p>
      <hr />
      <div>{cartData.length > 0 ? renderCartItems : empty}</div>
    </div>
  );
}

export default Cart;
