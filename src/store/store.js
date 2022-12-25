import { configureStore } from '@reduxjs/toolkit'
// import storage from 'redux-persist/lib/storage';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist'

import cartReducer from './cartSlice';
import productReducer from './productSlice'
import wishlistReducer from './wishlist';

// const persistConfig = {
//   key: 'root',
//   storage,
// }

// const persistedReducer = persistReducer(persistConfig, cartReducer)
// const productPersistedReducer = persistReducer(persistConfig, productReducer)
// const wishlistPersistedReducer = persistReducer(persistConfig, wishlistReducer)


// export const store = configureStore({
//     reducer: {
//       cart: persistedReducer,
//       product: productPersistedReducer,
//       wishlist: wishlistPersistedReducer
//     },
//     middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     })
// })

// const rootReducer = combineReducers({
   
//     cart: cartReducer,
//     product: productReducer,
//     wishlist:wishlistReducer
  
// })

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    wishlist:wishlistReducer
  }
}) 

// export function setupStore(preloadedState) {
//   return configureStore({
//     reducer: rootReducer,
//     preloadedState
//   })
// }
// export const persistor = persistStore(store)


