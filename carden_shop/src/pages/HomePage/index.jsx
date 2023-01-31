import React from 'react'
import CategoriesSection from '../../components/CategoriesSection'
import DiscountCoupon from '../../components/DiscountCoupon'
import SalesBanner from '../../components/SalesBanner'



export default function HomePage() {
  return (
    <div>
      <SalesBanner/>
      <CategoriesSection/>
      <DiscountCoupon/>
    </div>
  )
}
