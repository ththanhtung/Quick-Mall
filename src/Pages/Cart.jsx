import React from 'react';
import {CartItem, CartTotalPrice} from '../Components';
import styles from '../styles/PageLayout/CartPage.module.scss';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCart } from '../Store/CartSlice';
import useAuth from '../Hooks/useAuth';
import useCart from '../Hooks/useCart';

const Cart = () => {
  // const dispatch = useDispatch();
  // const {user} = useAuth()
  // React.useEffect(() => {
  //   dispatch(fetchCart(user._id))
  // }, []);
  useCart()

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