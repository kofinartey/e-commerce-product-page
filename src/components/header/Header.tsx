import { useEffect, useState } from "react";

import Cart from "../cart/Cart";
import styles from "./Header.module.css";
import menuIcon from "../../assets/images/icon-menu.svg";
import closeIcon from "../../assets/images/icon-close.svg";
import cartIcon from "../../assets/images/icon-cart.svg";
import logo from "../../assets/images/logo.svg";
import avatar from "../../assets/images/image-avatar.png";
import { CartItemInterface } from "../../types";

type HeaderProps = {
  cartData: CartItemInterface[];
  removeFromCart: (a: string) => void;
};

function Header({ cartData, removeFromCart }: HeaderProps) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  //recalculate cartCount
  useEffect(() => {
    let x: number = 0;
    cartData.forEach((item) => {
      x = x + item.qty;
    });
    setCartCount(x);
  }, [cartData]);

  const toggleMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const menuItems = ["Collections", "Men", "Women", "About", "Contact"];

  return (
    <nav>
      <div className={styles.wrapper}>
        <div className={styles.menuAndLogo}>
          <img
            src={menuIcon}
            className={styles.menuIcon}
            onClick={toggleMenu}
            alt="menu icon"
          />
          <img src={logo} className={styles.logo} alt="logo" />
        </div>

        <div className={styles.desktopMenu}>
          {menuItems.map((item) => (
            <a href="/" key={item}>
              <div>{item}</div>
            </a>
          ))}
        </div>

        {/* overlay */}
        <div
          className={styles.overlay}
          onClick={() => {
            if (showMobileMenu) setShowMobileMenu(false);
            if (showCart) setShowCart(false);
          }}
          style={
            showMobileMenu
              ? {
                  opacity: 1,
                  pointerEvents: "all",
                }
              : showCart
              ? {
                  pointerEvents: "all",
                  zIndex: 2,
                }
              : {}
          }
        ></div>

        {/* mobile menu. Hidden by default */}
        <div
          className={styles.mobileMenu}
          style={{ left: showMobileMenu ? 0 : "" }}
        >
          <img
            src={closeIcon}
            onClick={toggleMenu}
            className={styles.closeIcon}
            alt="close icon"
          />
          {menuItems.map((item) => (
            <a href="/" key={item}>
              {item}
            </a>
          ))}
        </div>

        <div className={styles.cartAndAvatar}>
          <div className={styles.cartIcon} onClick={toggleCart}>
            {cartCount > 0 && (
              <div className={styles.cartBadge}>{cartCount}</div>
            )}
            <img src={cartIcon} alt="cart icon" />
          </div>
          <img src={avatar} className={styles.avatar} alt="avatar" />
          <div className={styles.cartWrapper}>
            {showCart && (
              <Cart cartData={cartData} removeFromCart={removeFromCart} />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
