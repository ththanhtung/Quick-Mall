import React from 'react'
import { ProductDetailComponent } from '../Components'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
  const {productId} = useParams();

  return (
    <main>
      <ProductDetailComponent productId={productId}/>
    </main>
  )
}

export default React.memo(ProductDetail)