import React from 'react'
import CheckoutForm from '../Components/CheckoutForm'
import useCart from '../Hooks/useCart'

const Checkout = () => {
  useCart()
  return (
    <CheckoutForm/>
  )
}

export default Checkout