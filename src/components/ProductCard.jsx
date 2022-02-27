import React from 'react'
import {BsCartPlusFill} from 'react-icons/bs'

const ProductCard = () => {
  return (
    <div className="container-product-card">
      <div className="center-product">
        <div className="info-product">
          <div className="main-info-product">
            <h2 className="name-product">product name</h2>
            <h3 className="price-product">$12.000</h3>
          </div>
          <p className="desc-product">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <img src='https://images.pexels.com/photos/4397817/pexels-photo-4397817.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt="" className="img-product" />
        <button className='btn-add-to-cart'>
          <BsCartPlusFill className='icon-add-to-cart'/>
        </button>
      </div>
    </div>
  )
}

export default ProductCard