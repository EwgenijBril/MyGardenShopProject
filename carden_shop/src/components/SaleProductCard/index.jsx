import React from 'react'
import { Link } from 'react-router-dom'

import s from './index.module.css'


export default function SaleProductCard({ id, title, price, discont_price, description, image }) {
  return (
    <div className={s.product_card}>
        <Link to={`/products/${id}`}><img src={`http://localhost:3333${image}`} alt={ title } /></Link>
        
        <div className={s.price_block}>
          <p className={s.price}>{ discont_price }$</p>
          <p className={s.discont_price}>{ price }$</p>
          <p className={s.discont}>-7%</p>
        </div>
        <p className={s.title}>{ title }</p>
    </div>
  )
}
