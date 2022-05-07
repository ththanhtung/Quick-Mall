import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Cart, Login, Sigup, Error, ProductDetail, Admin } from "./Pages";
import store from "./Store";
import "./index.css";

// React toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Checkout from "./Pages/Checkout";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/:path" element={<Admin />} />
          <Route path="sigup" element={<Sigup />} />
          <Route path="products" element={<App />}>
            <Route index element={<Home />} />
            <Route path="checkout" element={<Checkout/>}/>
            <Route path=":productId" element={<ProductDetail />} />
            <Route path="cart" element={<Cart />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
