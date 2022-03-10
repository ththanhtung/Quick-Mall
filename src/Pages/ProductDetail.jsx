import React from 'react'
import { Loading, ProductDetailComponent } from '../Components'
import { useParams } from 'react-router-dom'
import clsx from 'clsx'
import styles from '../styles/PageLayout/ProductDetail.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import {actions} from '../Store/ProductSlice';

const ProductDetail = () => {
  const {productId} = useParams();
  const dispatch = useDispatch();

  const [loading, setLoading] = React.useState(true);

  React.useEffect(()=>{
    fetchProduct()
  },[])

  const product = useSelector(state => state.products.selectedProduct);

  const fetchProduct = async ()=>{
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_GET_PRODUCTS}/${productId}`)
      dispatch(actions.setSelectedProduct(res.data))
      setLoading(false)
    } catch (error) {
      console.error(error)
      setLoading(false)
    }
  }

  console.log(product)

  if(loading){
    return <Loading/>
  }

  return (
    <main className={clsx(styles.mainContainer)}>
      <ProductDetailComponent {...product}/>
    </main>
  )
}

export default React.memo(ProductDetail)