import React, { useEffect, useState } from "react";
import { Loading, ProductCard } from "../Components";
import style from "../styles/PageLayout/Home.module.scss";
import clsx from "clsx";

import { useDispatch, useSelector } from "react-redux";
import { actions } from "../Store/ProductSlice";
import ProductRequest from "../Request/ProductRequest";
import { toast } from "react-toastify";
import useCart from "../Hooks/useCart";
import useAuth from "../Hooks/useAuth";
import SearchBar from "../Components/SearchBar";

const Home = () => {
  useCart();
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(true);
  const products = useSelector((state) => state.products.products);
  const [search, setSearch] = useState("");
  const [viewProducts, setViewProducts] = useState([]);

  const { user } = useAuth();
  // console.log(user);

  useEffect(() => {
    ProductRequest.getAllProducts()
      .then((res) => {
        dispatch(actions.setProducts(res));
        // console.log(res);
        // toast.success("Products loaded");
        setViewProducts(res);
      })
      .catch((err) => {
        toast.error(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [dispatch]);

  useEffect(() => {
    if (!products) return;
    if (search !== "") {
      const filteredProducts = products.filter(
        (product) =>
          product.title.toLowerCase().includes(search.toLowerCase()) ||
          (product.description &&
            product.description.toLowerCase().includes(search.toLowerCase()))
      );
      setViewProducts(filteredProducts);
    } else {
      setViewProducts(products);
    }
  }, [search, products]);

  if (loading) {
    return <Loading />;
  }
  // console.log(products);

  return (
    <main>
      <SearchBar
        onSearch={(value) => {
          setSearch(value);
        }}
        products={products}
      />
      <div className={clsx(style.container)}>
        {viewProducts.map((product) => {
          return <ProductCard key={product._id} {...product} />;
        })}
      </div>
    </main>
  );
};

export default React.memo(Home);
