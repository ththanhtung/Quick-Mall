import React from 'react'
import {BsPlusLg} from 'react-icons/bs'
import {FaMinus} from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { CartActions } from '../Store/CartSlice'

const CartItem = ( {image, title, price, category, id, amount}) => {
    const dispatch = useDispatch();
    const handleIncrease = ()=>{
        dispatch(CartActions.increaseProduct(id))
    }

    const handleDecrease = ()=>{
        dispatch(CartActions.decreaseProduct(id))
    }

    const handleDelete = () => {
        // console.log('delete product function active');
        dispatch(CartActions.deleteProduct(id))
    }

    const totalPrice = price * amount;

  return (
    <div className='container-cart-item'>
        <div className="container-center-cart-item flex">
            <div className="info-product flex">
                <h3 className="name-product">{title}</h3>
                <img src={image} alt="" className="img-product" />
            </div>
            <div className="price-amout-cart-item flex">
                <h4 className="price-product">${price}</h4>
                <div className="amount-products flex">
                    <button className="btn-decrease" onClick={handleDecrease}>
                        <FaMinus className='icon icon-minus'/>
                    </button>
                    <h4 className="amount-product"> {amount}</h4>
                    <button className='btn-increase' onClick={handleIncrease}>
                        <BsPlusLg className='icon icon-increase'/>
                    </button>
                </div>
                <h4 className="total-price-products">
                    ${parseFloat(totalPrice).toFixed(2)}
                </h4>
               
            </div>
            <button className="btn-delete" onClick={handleDelete}>
                    <p>delete</p>
            </button>
        </div>
    </div>
  )
}

export default React.memo(CartItem)