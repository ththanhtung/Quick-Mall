import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import CartRequest from "../Request/CartRequest";

export const fetchCart = createAsyncThunk("cart/fetchCart", async (userId) => {
  try {
    // console.log('user id:',userId);
    const res = await CartRequest.getCart(userId);
    console.log(res[0]);
    return res[0];
  } catch (error) {
    console.error(error)
  }
});

export const updateCart = createAsyncThunk(
  "cart/updateCart",
  async (updatedCart) => {
    try {
      const { cartId, currentProductsInCart } = updatedCart;
      console.log(cartId, currentProductsInCart);
      const res = await CartRequest.updateCart(cartId, currentProductsInCart);
      console.log(res);
      return res;
    } catch (error) {
     console.error(error);
    }
  }
);

const normalizeData = (product) => {
  const defaultProduct = {
    _id: "",
    color: "",
    size: "",
    amount: 1,
    img: "https://dummyimage.com/300x200/000/fff",
    price: 0,
    category: [],
    title: "default title",
  };
  return {
    ...defaultProduct,
    ...product,
    _id: product._id,
    amount: product.quantity,
  };
};

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    _id: "",
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
            quantity: item.amount + action.payload.amount
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
            quantity: item.amount + 1,
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
              quantity: item.amount - 1,
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
          product._id !== action.payload._id ||
          product.size !== action.payload.size ||
          product.color !== action.payload.color;
        console.log("is different: ", isDifferent);
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
      // console.log(totalAmount);
      state.totalAmount = totalAmount;
      state.totalProducts = totalProducts;
    },
  },
  extraReducers: {
    [fetchCart.fulfilled]: (state, action) => {
      const loadedProducts = action.payload.products.map(normalizeData);
      // console.log(action.payload._id);
      // console.log(loadedProducts);
      state.cart = loadedProducts;
      state._id = action.payload._id;
    },
    [updateCart.fulfilled]: (state, action) => {
      //  const loadedProducts = action.payload.products.map(normalizeData);
       // console.log(loadedProducts);
      //  state.cart = loadedProducts;
    },
  },
});

export const getCurrentProductsInCart = state => state.cart.cart;
export const getCartId = state => state.cart._id;
export const CartActions = CartSlice.actions;
export default CartSlice;
