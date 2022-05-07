import React from 'react';
import {CartItem, CartTotalPrice} from '../Components';
import styles from '../styles/PageLayout/CartPage.module.scss';
import clsx from 'clsx';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cartItems = useSelector(state=>state.cart.cart)

  console.log(cartItems);
  return (
    <main>
        <div className={clsx(styles.containerCartItems)}>
          {cartItems.map((item, index)=>{
            return <CartItem key={index} {...item}/>
          })}
          <CartTotalPrice/>
        </div>
    </main>
  )
}

export default React.memo(Cart)