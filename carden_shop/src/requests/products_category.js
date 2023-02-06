import { loadProductsCategory } from "../store/reducers/products_category"

export const load_products_category = id => {
    return dispatch => {
        fetch(`http://localhost:3333/categories/${id}`)
        .then(resp => resp.json())
        .then(json => dispatch(loadProductsCategory(json)))
    }  
}