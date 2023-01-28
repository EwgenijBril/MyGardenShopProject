import React from 'react'
import s from './index.module.css'

export default function CategoryCard({id, title, image}) {
  return (
    <div className={s.card}>
        <img src={`http://localhost:3333${image}`} alt={ title } />
        <p>{ title }</p>
    </div>
  )
}
