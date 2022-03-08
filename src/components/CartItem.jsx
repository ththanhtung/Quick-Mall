import React from 'react'
import {BsPlusLg} from 'react-icons/bs'
import {FaMinus} from 'react-icons/fa'

const CartItem = () => {
  return (
    <div className='container-cart-item'>
        <div className="container-center-cart-item flex">
            <div className="info-product flex">
                <h3 className="name-product">product name</h3>
                <img src='https://images.pexels.com/photos/4397817/pexels-photo-4397817.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt="" className="img-product" />
            </div>
            <div className="price-amout-cart-item flex">
                <h4 className="price-product">12.000</h4>
                <div className="amount-products flex">
                    <button className="btn-decrease">
                        <FaMinus className='icon icon-minus'/>
                    </button>
                    <h4 className="amount-product"> 2</h4>
                    <button className='btn-increase'>
                        <BsPlusLg className='icon icon-increase'/>
                    </button>
                </div>
                <h4 className="total-price-products">
                    24.000
                </h4>
               
            </div>
            <button className="btn-delete">
                    <p>delete</p>
            </button>
        </div>
    </div>
  )
}

export default React.memo(CartItem)