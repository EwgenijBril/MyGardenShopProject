import React from 'react'
import CategoriesContainer from '../CategoriesContainer'
import s from './index.module.css'

export default function CategoriesSection() {
  return (
    <section className={s.section}>
        <h2>Catigories</h2>
        <CategoriesContainer/>    
    </section>
  )
}
