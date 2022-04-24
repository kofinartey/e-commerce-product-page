import { useState } from "react";

import styles from "./Header.module.css";
import menuIcon from "../../assets/images/icon-menu.svg";
import closeIcon from "../../assets/images/icon-close.svg";
import cartIcon from "../../assets/images/icon-cart.svg";
import logo from "../../assets/images/logo.svg";
import avatar from "../../assets/images/image-avatar.png";

function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMenu = () => {
    setShowMobileMenu(!showMobileMenu);
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
          onClick={toggleMenu}
          style={
            showMobileMenu
              ? {
                  opacity: 1,
                  pointerEvents: "all",
                }
              : {}
          }
        ></div>

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
          <img src={cartIcon} alt="cart icon" />
          <img src={avatar} className={styles.avatar} alt="avatar" />
        </div>
      </div>
    </nav>
  );
}

export default Header;
