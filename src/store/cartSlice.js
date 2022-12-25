import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart:[],
    },

    reducers: {
        // add(state, action) {
        //     //return [...state, action.payload]
        //     state.push(action.payload); 
        // },
        
        // remove(state, action) {
        //     return state.filter(item => item.id !== action.payload);
        // }
        
        addToCart (state, action) {
            const itemInCart = state.cart.find(item => item.id === action.payload.id)
            if (itemInCart) {
                itemInCart.quantity++;
            } else {
                state.cart.push({...action.payload, quantity:1})
            }
        },

        incrementQuantity (state, action) {
            const item = state.cart.find(item => item.id === action.payload);
            item.quantity++;
        },

        decrementQuantity (state, action)  {
            const item = state.cart.find(item => item.id === action.payload);
            if (item.quantity === 1) {
                item.quantity = 1;
            }
            else {
                item.quantity--;
            }
        },
        
        removeFromCart(state, action) {
            const removedItems = state.cart.find(item => item.id === action.payload);
            const index = state.cart.indexOf(removedItems);
            if (index > -1) {
                state.cart.splice(index,1)
            }

            // const afterRemove = state.cart.filter(item => item.id !== action.payload);
            // state.cart = afterRemove
            
            
        }
    }
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;

