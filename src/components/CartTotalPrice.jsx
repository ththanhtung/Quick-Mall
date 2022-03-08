import React from 'react'

const cartTotalPrice = () => {
  return (
    <div className="container-cart-total-price">
      <div className="container-center-cart-total-price">
        <div className="total-price-amount-product">
          <h4 className="title-total-price">total price:</h4>
          <h4 className="total-price">$100.000</h4>
          <h4 className="total-amount-product">3 selected product(s)</h4>
        </div>
        <div className="container-checkout">
          <button className="btn-checkout">
            checkout
          </button>
        </div>
      </div>
    </div>
  )
}

export default React.memo(cartTotalPrice)