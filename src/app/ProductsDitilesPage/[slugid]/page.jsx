import { Suspense } from 'react'
import ProductsContent from './ProductsContent'

const ProductsDitiles = ({ params }) => {
  return (
    <Suspense fallback={<div className="container mx-auto mt-4">লোড হচ্ছে...</div>}>
      <ProductsContent params={params} />
    </Suspense>
  )
}

export default ProductsDitiles