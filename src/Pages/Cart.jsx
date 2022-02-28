import React from 'react';
import {CartItem} from '../Components';
import styles from '../styles/PageLayout/CartPage.module.scss';
import clsx from 'clsx';

const Cart = () => {
  return (
    <main>
        <div className={clsx(styles.containerCartItems)}>
          <CartItem/>
          <CartItem/>
        </div>
    </main>
  )
}

export default Cart