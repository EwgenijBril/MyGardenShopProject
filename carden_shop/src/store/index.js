import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { categoriesReducer } from './reducers/categories';
import { productsReducer } from './reducers/products';

const rootReducer = combineReducers ({
    categories: categoriesReducer,
    products: productsReducer
});

export const store = createStore (rootReducer, applyMiddleware(thunk));