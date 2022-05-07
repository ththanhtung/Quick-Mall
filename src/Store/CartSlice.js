import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    totalProducts: 0,
    totalAmount: 0,
    cart: [],
  },
  reducers: {
    addProduct(state, action) {
      // Check whether the product is already in the cart
      // ! Must be the same product and the same color and size
      const isExisted = state.cart.find(
        (product) =>
          product._id === action.payload._id &&
          product.color === action.payload.color &&
          product.size === action.payload.size
      );

      // console.log(isExisted);

      if (!isExisted) {
        state.cart.push(action.payload);
        return;
      }

      // If the product is already in the cart, increase the amount
      const tempCart = state.cart.map((item) => {
        if (
          item._id === action.payload._id &&
          item.color === action.payload.color &&
          item.size === action.payload.size
        ) {
          return {
            ...item,
            color: action.payload.color,
            size: action.payload.size,
            amount: item.amount + action.payload.amount,
          };
        }
        return item;
      });

      state.cart = tempCart;
    },
    increaseProduct(state, action) {
      console.log("increasing");
      const tempCart = state.cart.map((item) => {
        // console.log(item._id);
        // console.log(action.payload);
        if (
          item._id === action.payload._id &&
          item.color === action.payload.color &&
          item.size === action.payload.size
        ) {
          return {
            ...item,
            amount: item.amount + 1,
          };
        }
        return item;
      });
      //   console.log(tempCart);
      state.cart = tempCart;
    },
    decreaseProduct(state, action) {
      const tempCart = state.cart
        .map((item) => {
          if (
            item._id === action.payload._id &&
            item.color === action.payload.color &&
            item.size === action.payload.size
          ) {
            return {
              ...item,
              amount: item.amount - 1,
            };
          }
          return item;
        })
        .filter((item) => item.amount !== 0);
      state.cart = tempCart;
    },
    deleteProduct(state, action) {
      const compareProduct = (product) => {
        const isDifferent =
          product._id !== action.payload._id &&
          product.color !== action.payload.color &&
          product.size !== action.payload.size;

          console.log(isDifferent);
        return isDifferent;
      };
      const tempCart = state.cart.filter(compareProduct);
      state.cart = tempCart;
    },
    getTotal(state) {
      let { totalProducts, totalAmount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { amount, price } = cartItem;
          const itemTotal = price * amount;
          cartTotal.totalProducts += amount;
          cartTotal.totalAmount += itemTotal;
          return cartTotal;
        },
        {
          totalProducts: 0,
          totalAmount: 0,
        }
      );

      totalAmount = +parseFloat(totalAmount).toFixed(2);
      console.log(totalAmount);
      state.totalAmount = totalAmount;
      state.totalProducts = totalProducts;
    },
  },
});

export const CartActions = CartSlice.actions;
export default CartSlice;
