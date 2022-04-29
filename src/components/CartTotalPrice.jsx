import React from "react";
import { useSelector } from "react-redux";

const CartTotalPrice = () => {
  const { totalProducts, totalAmount } = useSelector((state) => state.cart);

  const handleCheckout = () => {
    alert(`Check out`);
  };

  return (
    <div className="container-cart-total-price">
      <div className="container-center-cart-total-price">
        <div className="total-price-amount-product">
          <h4 className="title-total-price">total price:</h4>
          <h4 className="total-price">${totalAmount}</h4>
          <h4 className="total-amount-product">
            {totalProducts} selected product(s)
          </h4>
        </div>
        <div className="container-checkout">
          <button className="btn-checkout" onClick={handleCheckout}>
            checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(CartTotalPrice);
