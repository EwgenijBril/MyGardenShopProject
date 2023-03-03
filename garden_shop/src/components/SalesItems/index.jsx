import React from 'react'
import SalesProductsContainer from '../SalesProductsContainer'
import s from './index.module.css'

export default function SalesItems() {
  return (
    <section className={s.section}>
        <h2>Sale</h2>
        <SalesProductsContainer/>
    </section>
  )
}
