import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import productSlice from "./ProductSlice";

const store = configureStore({
    reducer:{
        products: productSlice.reducer,
        cart: CartSlice.reducer
    }
})

export default store;