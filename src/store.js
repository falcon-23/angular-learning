import { configureStore } from "@reduxjs/toolkit";
import cartReucer from './feature/cart/cartSlice';

export const store = configureStore({
    reducer: {
        cart: cartReucer,
         
    }, 
});