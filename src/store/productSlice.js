//'thunk' is a programming term that means 'a piece of code that does some delayed work.

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import fetchProducts from '../services/api';

export const STATUSES = Object.freeze({
    LOADING: 'loading',
    IDLE: 'idle',
    ERROR: 'error'
});

export const initialState = {
    data: [],
    status:STATUSES.LOADING
};

/*--------------with async thunk------------*/

// export const fetchProducts = createAsyncThunk('products/fetch', async () => {
//      const res = await fetch(`https://fakestoreapi.com/products`);
//      const data = await res.json();
//      return data;
// })

export const fetchProductData = createAsyncThunk('products/fetch', async (_, thunkAPI) => {
    const rootState = thunkAPI.getState()
    console.log(rootState);
    // const response = await axios.get(`https://fakestoreapi.com/products`)
    // console.log(response);
    // console.log(response.data)
    // return response?.data

    const prod = await fetchProducts();
    console.log(prod);
    return prod
})

const productSlice = createSlice({
    name: 'product',
    initialState,

    //without createAsyncThunk, need reducers
    // reducers: {
    //     setProducts(state, action) {
    //         state.data = action.payload;
    //     },  
    //     setStatus(state, action) {
    //         state.status = action.payload;
    //     }
    // },   
    
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductData.pending, (state, action) => {
                state.status = STATUSES.LOADING;              
            })
        
            .addCase(fetchProductData.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE;
            })
        
            .addCase(fetchProductData.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
            })
    }
});

export const {setProducts, setStatus} = productSlice.actions;
export default productSlice.reducer;

/*--------------without createAsyncThunk------------------------*/

// export async function fetchProducts() {
//     return async function fetchProductThunk(dispatch, getState) {
//         dispatch(setStatus(STATUSES.LOADING))
//         try {
//             const res = await fetch(`https://fakestoreapi.com/products`);
//             const data = await res.json();
//             dispatch(setProducts(data));
//             dispatch(setStatus(STATUSES.IDLE));
//         }
//         catch(err) {
//             console.log(err);
//             dispatch(setStatus(STATUSES.ERROR));
//         }
//     }
// }

