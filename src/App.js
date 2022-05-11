import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CartActions,
  getCartId,
  getCurrentProductsInCart,
  updateCart,
} from "./Store/CartSlice";
import { Outlet } from "react-router-dom";
import { Header } from "./Components";
import "./styles/style.scss";


function App() {
  const currentProductsInCart = useSelector(getCurrentProductsInCart);
  const cartId = useSelector(getCartId);
  console.log(currentProductsInCart);

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  React.useEffect(() => {
    dispatch(CartActions.getTotal());
    dispatch(updateCart({ cartId, currentProductsInCart }));
  }, [cart]);
  React.useEffect(() => {
    dispatch(CartActions.getTotal());
  });

  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
