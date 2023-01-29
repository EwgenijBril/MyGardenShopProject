import React from 'react'
import saleImg from './media/image 2.png'
import s from './index.module.css'

export default function SalesBanner() {
  return (
    <section className={s.section}>
        <div className={s.left_block}>
            <h2>Sale-Finale:</h2>
            <h3>Up to 70% discont</h3>   
        </div>
        <div className={s.btn_block}>
            <button className={s.left_btn}>All promotions</button>
            <button className={s.right_btn}>More...</button>
        </div>
        <div className={s.right_block}>
            <img src={saleImg} alt="saleImg" />
        </div>

    </section>
  )
}
