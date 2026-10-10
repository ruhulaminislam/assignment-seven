import HeadingDitilesPage from '@/componunts/Detiles/HeadingDitilesPage'
import ProductsDitilesPage from '@/componunts/Detiles/ProductsDitilesPage'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import React, { Suspense } from 'react'

const ProductsDitiles = async ({ params }) => {
    
          const { slugid } = await params
    
    const res = await fetch(`https://openapi.programming-hero.com/api/bazardor/products/${slugid}`)
    const data = await res.json()
   
      if (!data?.id) {
      notFound();
    }
      
    if (!data.nameBn) {
      notFound();
    }
  return (
    <div>
       <div className='flex items-center gap-2 container mx-auto mt-4'>
        <Link href="/"><p>{`হোম  >`}</p></Link>
        <p>{`${data?.categoryNameBn} >`}</p>
        <p>{`${data?.nameBn} `}</p>
       </div>
     <div>
        <HeadingDitilesPage data={data}></HeadingDitilesPage>
     </div>
      <div>
        <ProductsDitilesPage data={data}></ProductsDitilesPage>
      </div>




    </div>
  )
}

export default ProductsDitiles
