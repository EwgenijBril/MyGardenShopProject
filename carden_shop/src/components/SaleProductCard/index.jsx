import React from 'react'
import s from './index.module.css'


export default function SaleProductCard({ id, title, price, discont_price, description, image }) {
  return (
    <div className={s.product_card}>
        <img src={`http://localhost:3333${image}`} alt={ title } />
        <p>{ price }$</p>
        <p>-{ discont_price }%</p>
        <p>{ title }</p>
    </div>
  )
}
