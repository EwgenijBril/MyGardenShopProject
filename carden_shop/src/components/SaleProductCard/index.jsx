import React from 'react'
import s from './index.module.css'


export default function SaleProductCard({ id, title, price, discont_price, description, image }) {
  return (
    <div className={s.product_card}>
        <img src={`http://localhost:3333${image}`} alt={ title } />
        <div className={s.price_block}>
          <p className={s.price}>{ price }$</p>
          <p className={s.discont_price}>-{ discont_price }%</p>
        </div>
        <p className={s.title}>{ title }</p>
    </div>
  )
}
