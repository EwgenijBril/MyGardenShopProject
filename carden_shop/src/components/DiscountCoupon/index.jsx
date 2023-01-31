import React from 'react'
import discountImg from './media/image 3.png'
import s from './index.module.css'

export default function DiscountCoupon() {
  return (
    <section className={s.section}>
        <div className={s.section_container}>
            <div>
                <img src={ discountImg } alt="discountImg" />
            </div>

            <form>
                <h2>Sale 5%</h2>
                <h3>for first ordner</h3>
                <input type="number" placeholder='+49' />
                <button>Get coupon</button>
            </form>
        </div>
        
    </section>
  )
}
