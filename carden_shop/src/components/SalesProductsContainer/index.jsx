import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SaleProductCard from '../SaleProductCard'
import { load_products } from '../../requests/products_req'
import s from './index.module.css'

export default function SalesProductsContainer() {

    const dispatch = useDispatch();
    const products = useSelector(state => state.products);

    useEffect(() => {
        dispatch(load_products)
    }, [])

  return (
    <div className={s.products_container}>
        {
          products.map(el => <SaleProductCard  key={el.id} {...el}  /> )
        }
    </div> 
  )
}