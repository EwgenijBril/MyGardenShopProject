const defaultState = [];

const LOAD_PRODUCTS_CATEGORY = 'LOAD_PRODUCTS_CATEGORY';

export const loadProductsCategory = payloud => ({ type: LOAD_PRODUCTS_CATEGORY, payloud });

export const productsCategoryReducer = ( state = defaultState, action ) => {
    if ( action.type === LOAD_PRODUCTS_CATEGORY ) {
        return action.payloud
    } else {
        return state
    }
}