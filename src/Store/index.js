import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";
import CartSlice from "./CartSlice";
import productSlice from "./ProductSlice";

const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    cart: CartSlice.reducer,
    auth: AuthSlice,
  },
});

export default store;
