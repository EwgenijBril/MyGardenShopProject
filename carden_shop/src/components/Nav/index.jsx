import React from 'react'
import logo from './media/image 1.png'
import { Link } from 'react-router-dom'
import { ShoppingOutlined } from '@ant-design/icons'
import s from './index.module.css'

export default function Nav() {

  return (
    <nav className={s.nav}>
      <header className={s.header}>
        <img src={logo} alt='logo' />
        <button>Catalog</button>
      </header>

      <div className={s.nav_menu}>
        <Link to='/'>categories</Link>
        <Link>coupon</Link>
        <Link>promotions</Link>
        <Link>constacts</Link>
        <ShoppingOutlined className={s.cart} />
      </div>
    </nav>
  )
}
