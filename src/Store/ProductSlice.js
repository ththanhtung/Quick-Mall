import { createSlice } from "@reduxjs/toolkit";


const productSlice = createSlice({
    name: 'products',
    initialState: {
        selectedProduct:{},
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

        },
        setSelectedProduct(state, action){
            state.selectedProduct = action.payload;
        }
    }
})

export const actions = productSlice.actions;
export default productSlice;