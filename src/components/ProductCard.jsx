import React from 'react'
import {BsCartPlusFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'

const ProductCard = ({id, title, price, image, description}) => {
  return (
    <article className="container-product-card" title={title}>
      <Link to={`${id}`}>
        <div className="center-product">
          <div className="info-product">
            <div className="main-info-product">
              <h2 className="name-product">{title}</h2>
              <h3 className="price-product">${price}</h3>
            </div>
            <p className="desc-product">{`${description.substring(0,61)}. . .`}</p>
          </div>
          <img src={image} alt="" className="img-product" />
          <button className='btn-add-to-cart'>
            <BsCartPlusFill className='icon-add-to-cart'/>
          </button>
        </div>
      </Link>
    </article>
    
  )
}

export default React.memo(ProductCard)