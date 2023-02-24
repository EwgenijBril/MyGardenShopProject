import React from "react";
import logo from "./media/image 1.png";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { ShoppingOutlined } from "@ant-design/icons";
import s from "./index.module.css";

export default function Nav() {
  return (
    <section className={s.nav_section}>
      <nav className={s.nav}>
        <header className={s.header}>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <button>Catalog</button>
        </header>

        <div className={s.nav_menu}>
          <Link to="categories">Categories</Link>
          <HashLink smooth to="#coupon">
            Coupon
          </HashLink>
          <Link to="products">Sale</Link>
          <HashLink smooth to="#contacts">
            Contacts
          </HashLink>
          <Link to="cart">
            <ShoppingOutlined className={s.cart} />
          </Link>
        </div>
      </nav>
    </section>
  );
}
