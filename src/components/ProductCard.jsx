import React from "react";
import { BsCartPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const ProductCard = ({ _id, title, price, img, desc }) => {
  return (
    <article className="container-product-card" title={title}>
      <Link to={`${_id}`}>
        <div className="center-product">
          <div className="info-product">
            <div className="main-info-product">
              <h2 className="name-product">{title}</h2>
              <h3 className="price-product">${price}</h3>
            </div>
            <p className="desc-product">{`${desc.substring(0, 61)}. . .`}</p>
          </div>
          <img src={img} alt="" className="img-product" />
          <button className="btn-add-to-cart">
            <BsCartPlusFill className="icon-add-to-cart" />
          </button>
        </div>
      </Link>
    </article>
  );
};

export default React.memo(ProductCard);
