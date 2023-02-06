import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'
import { load_products_category } from '../../requests/products_category'
import SaleProductCard from '../../components/SaleProductCard'
import s from './index.module.css'


export default function ProductsCategoryPage() {

  const { id } = useParams();

  const dispatch = useDispatch();
  const products_category = useSelector( state => state.products_category )

  useEffect(() => {
    dispatch(load_products_category( id ))
  }, [])
  
  return (
    <div>
       <div className={s.products_category_page}>
        {
          products_category.map(el => <SaleProductCard key={el.id} {...el}/>)
        }
      </div>
    </div>
   
  )
}
