import React from 'react'
import CheckoutForm from '../Components/CheckoutForm'
import useCart from '../Hooks/useCart'
import styles from '../styles/PageLayout/Checkout.module.scss'
import clsx from 'clsx'

const Checkout = () => {
  useCart()
  return (
    <main className={clsx(styles.containerCheckout)}>
      <CheckoutForm />
    </main>
  );
}

export default Checkout