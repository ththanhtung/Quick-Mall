import React from "react";
import CustomSelect from "./CustomSelect";
import { useDispatch } from "react-redux";
import { CartActions } from "../Store/CartSlice";

const ProductDetailComponent = ({
  img,
  title,
  price,
  categories,
  id,
  color,
  size,
  desc,
}) => {
  const dispatch = useDispatch();
  const [amount, setAmount] = React.useState(1);

  const handleAddToCart = () => {
    dispatch(
      CartActions.addProduct({
        img,
        title,
        price,
        categories,
        id,
        amount: +amount,
      })
    );
  };

//   console.log(img);

  return (
    <article className="article-product-detail">
      <div className="container-detail-product">
        <div className="container-img">
          <img src={img} alt={title} />
        </div>
        <div className="container-center-product">
          <div className="info-product">
            <h1 className="name-product">{title}</h1>
            <h2 className="price-product">${price}</h2>
            <div className="container-minor-info">
              <h3 className="availability">
                availability: <span className="info">in stock</span>
              </h3>
              {/* <h3 className="id-product">
                product id: <span className="info">{id}</span>
              </h3> */}
              <h3 className="categories">
                categories:{" "}
                <span className="info">
                  {categories &&
                    categories.map((category) => {
                      return <p>{category}</p>;
                    })}
                </span>
              </h3>
            </div>
          </div>
          <div className="container-size-color-quantity">
            <CustomSelect
              className="select-color"
              options={color.map((c) => {
                return { value: c, label: c };
              })}
              label="color"
            />
            <CustomSelect
              className="select-size"
              options={size.map((s) => {
                return { value: s, label: s };
              })}
              label={"size"}
            />
            <div className="field-quantity">
              <label htmlFor="quantity-id">quantity</label>
              <input
                id="quantity-id"
                min="1"
                type="number"
                value={amount}
                onChange={(e) => {
                  setAmount(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="container-button">
            <button className="btn-add-to-cart" onClick={handleAddToCart}>
              add to cart
            </button>
          </div>
        </div>
      </div>
      <div className="container-desc">
        <h2>description:</h2>
        <p className="desc">{desc}</p>
      </div>
    </article>
  );
};

export default React.memo(ProductDetailComponent);
