import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartCard from '../../components/CartCard';
import s from './index.module.css'

export default function CartPage() {

  //const dispatch = useDispatch();

  const cart = useSelector(state => state.cart)

  const total = cart.reduce((prev, {discont_price, count}) => prev + discont_price * count, 0 )

  return (
    <div className={s.cart_page} >
      <div className={s.title_block}>
        <h1>Shopping cart</h1>
        <p>Back to the store</p>
      </div>
      <div className={s.info_block}>
        <div>
        {
          cart.map(el => <CartCard key={el.id} {...el}/>)
        }
        </div>
        <div className={s.left_block}>
          <div className={s.titel}>
            <h3>Order details</h3>
            <div className={s.totals_count}>
              <h4>Total:</h4> 
              <p>{total}$</p>
            </div>
          </div>
          <div className={s.letest_block}>
            <input type="number" placeholder='Phone number'/>
            <button>order</button>
          </div>
        </div>
      </div>
      
    </div>
  )
}
