import { Suspense } from 'react'
import ProductsCategory from './ProductsCategory'

const ProductsDitiles = ({ params }) => {
  return (
    <Suspense fallback={<div className="container mx-auto mt-4">লোড হচ্ছে...</div>}>
      <ProductsCategory params={params} />
    </Suspense>
  )
}

export default ProductsDitiles