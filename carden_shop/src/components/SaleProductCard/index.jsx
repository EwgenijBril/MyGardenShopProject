import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCard } from '../../store/reducers/cart'
import s from './index.module.css'


export default function SaleProductCard({ id, title, price, discont_price, description, image }) {

  const dispatch = useDispatch();

  const add_to_card = () => dispatch(addToCard({id, image, title, discont_price, price}))

  return (
    <div className={s.product_card}>
        <div className={s.product_card_block}>
          <Link to={`/products/${id}`}><img src={`http://localhost:3333${image}`} alt={ title } /></Link>
          <button onClick={add_to_card}>Add to card</button>
        </div>
        <div className={s.price_block}>
          <p className={s.discont_price}>{ discont_price }$</p>
          <p className={s.price}>{ price }$</p>
          <p className={s.discont}>-7%</p>
        </div>
        <p className={s.title}>{ title }</p>
    </div>
  )
}
