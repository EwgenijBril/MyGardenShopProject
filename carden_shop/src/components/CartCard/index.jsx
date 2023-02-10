import React from 'react'
import s from './index.module.css'
import { RxCross2 } from 'react-icons/rx'

export default function CartCard({ id, title, image, discont_price, price, count }) {
  return (
    <div className={s.cart_card}>
        <div className={s.left_block}>
            <img src={`http://localhost:3333${image}`} alt={ title } />
            <div className={s.info_block}>
                <p className={s.title}>{title}</p>
                <div className={s.card_button}>
                    <button>-</button>
                    <p>1</p>
                    <button>+</button>
                </div> 
            </div>  
        </div>
        <div className={s.rigth_block}>
            <p className={s.discont_price}>{ discont_price }<span>$</span></p>
            <p className={s.price}>{price}$</p>
            <RxCross2 className={s.cross}/>  
        </div> 
        
    </div>
  )
}
