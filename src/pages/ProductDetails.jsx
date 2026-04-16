import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
  const params = useParams()

  const { id } = params;


  return (
    <div>
      <h1>Product Details</h1>
    </div>
  )
}

export default ProductDetails
