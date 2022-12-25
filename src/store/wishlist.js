import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    wishlist:[]
}
export const wishlistSlice = createSlice({
    name: 'wishlist',
    // initialState: {
    //     wishlist:[],
    // },
    initialState,
    reducers: {
        addToWishlist(state, action) {
            const itemsInWishlist = state.wishlist.find(item => item.id === action.payload.id)
            if (!itemsInWishlist) {
                state.wishlist.push(action.payload) 
            }           
        },
        
        removeFromWishlist(state, action) {
            const afterRemove = state.wishlist.filter(item => item.id !== action.payload)
            state.wishlist = afterRemove
        }
    }
}) 

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;