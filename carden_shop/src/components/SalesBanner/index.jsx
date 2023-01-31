import React from 'react'
import saleImg from './media/image 2.png'
import s from './index.module.css'

export default function SalesBanner() {
  return (
    <section className={s.section}>
        <div className={s.section_container}>
           <div className={s.left_block}>
                <h1>Sale-Finale:</h1>
                <h2>Up to 70% discont</h2>  
                <button className={s.left_btn}>All promotions</button>
                <button className={s.right_btn}>More...</button>
            </div>
       
            <div className={s.right_block}>
                <img src={saleImg} alt="saleImg" />
            </div> 
        </div>
    </section>
  )
}
