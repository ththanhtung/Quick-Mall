import React from "react";
import { Loading, ProductDetailComponent } from "../Components";
import { useParams } from "react-router-dom";
import clsx from "clsx";
import styles from "../styles/PageLayout/ProductDetail.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../Store/ProductSlice";
import ProductRequest from "../Request/ProductRequest";
import { toast } from "react-toastify";

const ProductDetail = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();

  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetchProduct();
  }, []);

  const product = useSelector((state) => state.products.selectedProduct);

  const fetchProduct = async () => {
    ProductRequest.getProductById(productId)
      .then((res) => {
        // console.log(res.data);
        dispatch(actions.setSelectedProduct(res.data));
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // console.log(product)

  if (loading) {
    return <Loading />;
  }

  return (
    <main className={clsx(styles.mainContainer)}>
      <ProductDetailComponent {...product} />
    </main>
  );
};

export default React.memo(ProductDetail);
