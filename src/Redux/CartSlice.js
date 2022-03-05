import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        totalProducts:0,
        totalAmount:0,
        productsList:[]
    },
    reducers:{
        addProduct(){

        },
        deleteProduct(){

        }
    }
})

export const CartActions = CartSlice.actions;
export default CartSlice;