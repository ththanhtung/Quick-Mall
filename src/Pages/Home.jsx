import React from "react";
import { Loading, ProductCard } from "../Components";
import style from "../styles/PageLayout/Home.module.scss";
import clsx from "clsx";

import { useDispatch, useSelector } from "react-redux";
import { actions } from "../Store/ProductSlice";
import ProductRequest from "../Request/ProductRequest";
import { toast } from "react-toastify";

const Home = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(true);
  const products = useSelector((state) => state.products.products);

  React.useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    ProductRequest.getAllProducts()
      .then((res) => {
        dispatch(actions.setProducts(res));
        console.log(res);
        // toast.success("Products loaded");
      })
      .catch((err) => {
        toast.error(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (loading) {
    return <Loading />;
  }
  // console.log(products);

  return (
    <main>
      <div className={clsx(style.container)}>
        {products.map((product) => {
          return <ProductCard key={product._id} {...product} />;
        })}
      </div>
    </main>
  );
};

export default React.memo(Home);
