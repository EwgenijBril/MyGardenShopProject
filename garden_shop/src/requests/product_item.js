import { loadProduct } from "../store/reducers/product_item"

export const load_product = id => { 
   return dispatch => {
        fetch(`https://project-backend1-jw2u.onrender.com/products/${id}`)
        .then(resp => resp.json())
        .then(json => dispatch(loadProduct(json[0])))
    }
}