import React from 'react'
import MarqueeText from "react-marquee-text"


const MarqueeTexte = async () => {
  const res =await fetch("https://api.api-store.workers.dev/api/bazardor/products")
  const allProducts = await res.json()
   
  return (
    <div >
      <MarqueeText direction="right" duration={12} >
       <div  >
        {
          allProducts.map(product=><span className='' key={product.id}>
                <span className='mr-1'>{product.image}</span>
                <span className='mr-3'>{product.nameBn}</span>
                <span className='mr-3'>{`${product.today} টাকা/${product.unit}`}</span>
               <span className='mr-13  '>
    {
        product.change.dir === "up"
            ? <span className='text-[#D03739]'>{`▲ ${product.change.pct}%`}</span>
            : product.change.dir === "down"
                ? <span className='text-[#1A9951]'>{`▼ ${product.change.pct}%`}</span>
                : `${product.change.pct}%`
    }
</span>
          </span>)
        }
       </div>
    </MarqueeText>
    </div>
  )
}

export default MarqueeTexte
