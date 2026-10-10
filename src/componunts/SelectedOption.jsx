"use client"
import React, { useState } from 'react'
import ProductsCards from './home/ProductsCards'

const SelectedOption = ({ allProducts }) => {
    const [sortBy, setSortBy] = useState("default");
    const sortedProducts = [...allProducts];

if (sortBy === "low-high") {
  sortedProducts.sort((a, b) => a.today - b.today);
}

if (sortBy === "high-low") {
  sortedProducts.sort((a, b) => b.today - a.today);
}
  return (
    <div>
       {/* defult */}
      <div className="container mx-auto mb-6 flex items-center justify-end gap-3 rounded-2xl border border-[#E1E8E1] px-4 py-3">
     
        <div>
    <h1>সাজান</h1>
  </div>

  <div>
    <select value={sortBy} onChange={(e)=>setSortBy(e.target.value)} className="rounded-lg border border-[#E1E8E1] px-3 py-2 outline-none">
      <option value="default">ডিফল্ট</option>
      <option value="low-high">দাম: কম থেকে বেশি</option>
      <option value="high-low">দাম: বেশি থেকে কম</option>
    </select>
  </div>
     
</div>
 {/* defult */}
      <div className="container mx-auto mt-8 ">
        <h1 className="mb-6  text-1xl">
        
          মোট {allProducts.length}টি পণ্য দেখানো হচ্ছে
        </h1>
        <div className=" grid md:grid-cols-2  lg:grid-cols-3 gap-3">
          {sortedProducts.map((product) => (
            <div key={product.id}>
              <ProductsCards product={product}></ProductsCards>
            </div>
          ))}
        </div>
      </div>
    </div>
   
  )
}

export default SelectedOption
