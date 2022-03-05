import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./ProductSlice";

const store = configureStore({
    reducer:{
        products: productSlice.reducer
    }
})

export default store;