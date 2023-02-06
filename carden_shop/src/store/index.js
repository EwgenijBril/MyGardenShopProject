import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { categoriesReducer } from './reducers/categories';
import { productsReducer } from './reducers/products';
import { productsCategoryReducer } from './reducers/products_category';

const rootReducer = combineReducers ({
    categories: categoriesReducer,
    products: productsReducer,
    products_category: productsCategoryReducer
});

export const store = createStore (rootReducer, applyMiddleware(thunk));