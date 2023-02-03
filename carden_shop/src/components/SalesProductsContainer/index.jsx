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

    // const getRandomNumbers = (arr) => {
    //   let result = [];
    //   let randomIndex;
    //   while (result.length < 3) {
    //     randomIndex = Math.floor(Math.random() * arr.length);
    //     if (!result.includes(arr[randomIndex])) {
    //       result.push(arr[randomIndex]);
    //     }
    //   }
    //   return result;
    // };

    // let random = getRandomNumbers(products)

  return (
    <div className={s.products_container}>
        {
            products
            .map(el => <SaleProductCard  key={el.id} {...el}  /> )
        }
    </div> 
  )
}