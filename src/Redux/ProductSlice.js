import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: []
    },
    reducers: {
        getProducts(){

        },
        addProduct(){

        },
        updateProduct(){

        },
        removeProduct(){

        }
    }
})

export const actions = productSlice.actions;
export default productSlice;