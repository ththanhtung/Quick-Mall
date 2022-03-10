import React from 'react'

const ProductDetailComponent = ({image, title, price, category, id}) => {
  return (
    <article>
        <div className="container-img">
            <img src={image} alt={title} />
        </div>
        <div className="info-product">
            <h1 className='name-product'>{title}</h1>
            <h2 className='price-product'>${price}</h2>  
            <div className="container-minor-info">
                <h3 className="availability">availability: in stock</h3>
                <h3 className="id-product">product id: {id}</h3>
                <h3 className="categories">categories: {category}</h3>    
            </div>  
        </div>-
        <div className="container-size-color-quantity">
            
        </div>

        <div className="container-button">
            <div className="btn-add-to-cart">
                <button>
                    add to cart
                </button>  
            </div>    
        </div>
    </article>
  )
}

export default React.memo(ProductDetailComponent)