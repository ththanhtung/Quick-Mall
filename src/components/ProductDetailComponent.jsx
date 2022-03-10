import React from 'react'
import CustomSelect from './CustomSelect'

const ProductDetailComponent = ({image, title, price, category, id}) => {
  return (
    <article className='container-detail-product'>
        <div className="container-img">
            <img src={image} alt={title} />
        </div>
        <div className="container-center-product">
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
                <CustomSelect className='select-color' label='color'/>
                <CustomSelect className='select-size' label={'size'}/>
                <div className="field-quantity">
                    <label htmlFor="quantity-id">quantity</label>
                    <input type="number" />
                </div>
            </div>
            <div className="container-button">
                <div className="btn-add-to-cart">
                    <button>
                        add to cart
                    </button>
                </div>
            </div>
        </div>
    </article>
  )
}

export default React.memo(ProductDetailComponent)