"use client"
import { authClient } from '@/lib/auth-client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import toast from 'react-hot-toast'

const ProductsCards = ({product}) => {
  const { data: session } = authClient.useSession()
  const handleDitilesPage= ()=>{
      if(!session) {
    toast.error("details page access denied please login")
   }
  }
    console.log(product)
  return (
 
 <Link onClick={handleDitilesPage} href={`/ProductsDitilesPage/${product.id}`}>
 <div className="flex flex-col rounded-2xl border border-[#E1E8E1] bg-[#FAFCFA] p-5">

  {/* Product Info */}
  <div className="flex items-center gap-4">
    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#F0F5F0]">
      <span>{product?.image}</span>
    </div>

    <div>
      <p className="font-semibold text-[#1D271F]">
        {product?.nameBn}
      </p>

      <p className="mt-1 text-sm text-[#5F6761]">
        প্রতি {product?.unit}
      </p>
    </div>
  </div>

  {/* Label */}
  <div className="mt-6">
    <p className="text-sm text-[#5F6761]">
      আজকের দাম
    </p>
  </div>

  {/* Price */}
  <div className="mt-2 flex items-center justify-between">
    <p className="text-2xl font-bold text-[#1D271F]">
      {product?.today?.toLocaleString("bn-BD")} টাকা
    </p>

    <p className="rounded-full bg-[#F0F5F0] px-3 py-1 text-sm font-medium ">
      {
        product?.change?.dir === "up"
            ? <span className='text-[#D03739]'>{`▲ ${product?.change?.pct}%`}</span>
            : product?.change?.dir === "down"
                ? <span className='text-[#1A9951]'>{`▼ ${Math.abs(product?.change?.pct)}%`}</span>
                : <span className='text-[#636E72] bg-[#F0F5F0]'>{`-0.${product?.change?.pct}%`}</span>
    }
    </p>
  </div>

</div>

 </Link>

  )
}

export default ProductsCards
