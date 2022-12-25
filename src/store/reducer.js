import { combineReducers } from "redux";
import cartReducer from './cartSlice';
import productReducer from './productSlice'
import wishlistReducer from './wishlist';


const rootReducer = combineReducers({
    cart: cartReducer,
    product: productReducer,
    wishlist:wishlistReducer
})

export default rootReducer