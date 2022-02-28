import React from 'react';
import {CartItem, CartTotalPrice} from '../Components';
import styles from '../styles/PageLayout/CartPage.module.scss';
import clsx from 'clsx';

const Cart = () => {
  return (
    <main>
        <div className={clsx(styles.containerCartItems)}>
          <CartItem/>
          <CartItem/>
          <CartItem/>
          <CartItem/>
          <CartItem/>
          <CartItem/>
          <CartItem/>
          <CartItem/>
          <CartItem/>
          <CartItem/>
          <CartTotalPrice/>
        </div>
    </main>
  )
}

export default Cart