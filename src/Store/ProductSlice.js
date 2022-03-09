import { createSlice } from "@reduxjs/toolkit";


const productSlice = createSlice({
    name: 'products',
    initialState: {
        products: []
    },
    reducers: {
        setProducts(state, action){
            state.products = action.payload;
        },
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