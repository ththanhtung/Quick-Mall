import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import useAuth from '../Hooks/useAuth';
import OrderRequest from '../Request/OrderRequest';

const CheckoutForm = () => {
    const currentCart = useSelector(state=> state.cart);
    const {user} = useAuth();
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')

    const handleSubmit = (e)=>{
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
        OrderRequest.createOrder(user._id, newOrder)
    }

    const handleAddress = (e)=>{
        setAddress(e.target.value)
        console.log(address);
    }
    const handlePhone = (e)=>{
        setPhone(e.target.value)
        console.log(phone);
    }

  return (
    <form className="form-checkout" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="input-address-id">address</label>
        <input
          id="input-address-id"
          type="text"
          value={address}
          onChange={handleAddress}
          required
        />
      </div>
      <div className="field">
        <label htmlFor="input-phone-id">phone number</label>
        <input
          id="input-phone-id"
          type="text"
          value={phone}
          onChange={handlePhone}
          required
        />
      </div>
      <div className="containter-btn">
        <button type="submit">submit</button>
      </div>
    </form>
  );
}

export default CheckoutForm