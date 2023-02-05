import React, { useEffect } from 'react'
import { load_categories } from '../../requests/categories_req'
import { useDispatch, useSelector } from 'react-redux'
import CategoryCard from '../../components/CategoryCard'
import s from './index.module.css'

export default function CategoriesPage() {

  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories);

  useEffect(() => {
    dispatch(load_categories)
  }, [])

  return (
    <div className={s.categories_page}>
      <h1>Categories</h1>
      <div className={s.categories_cards}>
      {
        categories.map(el => <CategoryCard key={el.id} {...el}/>)
      }
    </div>
    </div> 
  )
}
