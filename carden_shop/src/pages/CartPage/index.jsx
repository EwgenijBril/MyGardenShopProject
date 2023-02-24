import React from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import CartCard from "../../components/CartCard";
import s from "./index.module.css";

export default function CartPage() {
  const cart = useSelector((state) => state.cart);

  const total = cart.reduce(
    (prev, { discont_price, count }) => prev + discont_price * count,
    0
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const submit = (data) => {
    console.log(data, total);
    reset();
  };

  const phoneRegister = register("phone", {
    required: "* Mandatory field",
    pattern: {
      value: /^\+49\d{11}$/,
      message: "* Not valid phone-forman",
    },
  });

  return (
    <div className={s.cart_page}>
      <div className={s.title_block}>
        <h1>Shopping cart</h1>
        <p>Back to the store</p>
      </div>
      <div className={s.info_block}>
        <div>
          {cart.map((el) => (
            <CartCard key={el.id} {...el} />
          ))}
        </div>

        <form className={s.left_block} onSubmit={handleSubmit(submit)}>
          <div className={s.titel}>
            <h3>Order details</h3>
            <div className={s.totals_count}>
              <h4>Total:</h4>
              <p>{total}$</p>
            </div>
          </div>
          <div className={s.letest_block}>
            <input
              type="nummber"
              name="phone"
              placeholder="+49"
              {...phoneRegister}
            />
            <button>order</button>
            {errors.phone && <p>{errors.phone?.message}</p>}
          </div>
        </form>
      </div>
    </div>
  );
}
