import React from "react";
import discountImg from "./media/image 3.png";
import s from "./index.module.css";

export default function DiscountCoupon() {
  return (
    <section className={s.section_coupon} id="coupon">
      <img src={discountImg} alt="discountImg" />
      <form className={s.container_form}>
        <div>
          <h2>Sale 5%</h2>
          <h3>for first ordner</h3>
        </div>
        <input type="number" placeholder="+49" />
        <button>Get coupon</button>
      </form>
    </section>
  );
}
