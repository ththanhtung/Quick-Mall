import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        totalProducts:0,
        totalAmount:0,
        cart:[]
    },
    reducers:{
        addProduct(state, action){
            const isExisted = state.cart.some((item)=>item.id === action.payload.id);
            // console.log(isExisted);
            if(isExisted === false){
                state.cart.push(action.payload)
            }else{
                const tempCart = state.cart.map(item=>{
                    if (item.id === action.payload.id){
                        return {
                            ...item,
                            amount : item.amount + action.payload.amount
                        }
                    }
                    return item;
                })
                state.cart = tempCart;
            }
        },
        increaseProduct(state, action){
            const tempCart = state.cart.map(item=>{
                if (item.id === action.payload){
                    return {
                        ...item,
                        amount : item.amount + 1
                    }
                }
                return item;
            })
            state.cart = tempCart;
        },decreaseProduct(state, action){
            const tempCart = state.cart.map(item=>{
                if (item.id === action.payload){
                    return {
                        ...item,
                        amount : item.amount - 1
                    }
                }
                return item;
            }).filter(item => item.amount !== 0)
            state.cart = tempCart;
        },
        deleteProduct(state, action){
            const tempCart = state.cart.filter(item=>item.id !== action.payload)
            state.cart = tempCart;
        },
        getTotal(state){
            let {totalProducts, totalAmount} = state.cart.reduce((cartTotal, cartItem)=>{
                const {amount, price} = cartItem;
                const itemTotal = price * amount;
                cartTotal.totalProducts += amount;
                cartTotal.totalAmount += itemTotal;
                return cartTotal;
            }, {
                totalProducts: 0,
                totalAmount: 0
            })

            totalAmount = +parseFloat(totalAmount).toFixed(2);
            console.log( totalAmount);
            state.totalAmount = totalAmount;
            state.totalProducts = totalProducts;
        }
    }
})

export const CartActions = CartSlice.actions;
export default CartSlice;