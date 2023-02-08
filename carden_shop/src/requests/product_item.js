import { loadProduct } from "../store/reducers/product_item"

export const load_product = id => { 
   return dispatch => {
        fetch(`http://localhost:3333/products/${id}`)
        .then(resp => resp.json())
        .then(json => {
            const [product_data] = json;
            const { title, description, price, image, discont_price } = product_data
        dispatch( loadProduct({title, image, description, price, discont_price}))
    })
    }  
}