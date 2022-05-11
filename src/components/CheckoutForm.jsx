import React, { useState } from "react";
import { useSelector } from "react-redux";
import useAuth from "../Hooks/useAuth";
import OrderRequest from "../Request/OrderRequest";
import { toast } from "react-toastify";

const CheckoutForm = () => {
  const currentCart = useSelector((state) => state.cart);
  const { user } = useAuth();
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newOrder = {
      products: currentCart.cart,
      amount: currentCart.totalAmount,
      address,
      phone,
    };

    // console.log(
    //     'handle submit testing', newOrder
    // );
    try {
        OrderRequest.createOrder(user._id, newOrder);
         toast.success("create new order successful");
    } catch (error) {
        console.error(error)
    }
    
  };

  const handleAddress = (e) => {
    setAddress(e.target.value);
    console.log(address);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
    console.log(phone);
  };

  return (
    <form className="form-checkout" onSubmit={handleSubmit}>
      <div className="container-form-checkout">
        <div className="header-checkout mt-4">
          <h1 className="title mb-4">checkout</h1>
          <p className="subtitle">
            please fill in this form to create an order
          </p>
        </div>
        <div className="field field-username">
          <label htmlFor="addressId">address</label>
          <input
            className="input-text"
            id="addressId"
            type="text"
            value={address}
            onChange={handleAddress}
          />
        </div>
        <div className="field field-email">
          <label htmlFor="phoneId">phone</label>
          <input
            className="input-text"
            id="phoneId"
            type="text"
            value={phone}
            required
            onChange={handlePhone}
          />
        </div>
        <div className="container-btn-checkout">
          <button className="btn-checkout" type="submit">
            submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default CheckoutForm;
