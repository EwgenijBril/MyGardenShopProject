import { loadRandomProducts } from "../store/reducers/products"

export const load_products = dispatch => {
    fetch('http://localhost:3333/products/all')
    .then(resp => resp.json())
    .then(json => dispatch(loadRandomProducts(json)))
}