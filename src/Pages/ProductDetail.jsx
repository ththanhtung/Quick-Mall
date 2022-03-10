import React from 'react'
import { ProductDetailComponent } from '../Components'
import { useParams } from 'react-router-dom'
import clsx from 'clsx'
import styles from '../styles/PageLayout/ProductDetail.module.scss'
import { useSelector } from 'react-redux'

const ProductDetail = () => {
  const {productId} = useParams();

  const products = useSelector(state => state.products.products)

  const product = products.find(item => item.id.toString() === productId);

  return (
    <main className={clsx(styles.mainContainer)}>
      <ProductDetailComponent {...product}/>
    </main>
  )
}

export default React.memo(ProductDetail)