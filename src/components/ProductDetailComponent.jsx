import React from 'react'

const ProductDetailComponent = ({productId}) => {
  return (
    <div>{productId}</div>
  )
}

export default React.memo(ProductDetailComponent)