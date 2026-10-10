
import Banner from "../componunts/home/Banner";

import ProductsCards from "../componunts/home/ProductsCards";


export default async function Home() {
     const res =await fetch("https://openapi.programming-hero.com/api/bazardor/products")
    const allProducts = await res.json()
     const ProductsPriceUP = allProducts.filter(product=>product.change.dir==="up")
     const ProductsPriceUPSorting = ProductsPriceUP.sort((a,b)=>b.change.pct-a.change.pct)
     const ProductsPriceDown = allProducts.filter(product=>product.change.dir==="down")
     const ProductsPriceDownSorting = ProductsPriceDown.sort((a,b)=>a.change.pct-b.change.pct)
  return (
    <div className="">
      <Banner></Banner>

       {/* আজ দাম বেড়েছে */}
       <div className="container mx-auto mt-8 ">
          <h1 className="mb-6 font-bold text-2xl"><span className="text-[#D03739] ">▲</span> আজ দাম বেড়েছে </h1>
       <div className=" grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
         {
           ProductsPriceUPSorting.slice(0,6).map(product=><div key={product.id}>
            <ProductsCards product={product} ></ProductsCards>
           </div>)
         }
       </div>
       </div>
        
         {/* আজ দাম কমেছে */}

       <div className="container mx-auto mt-8 ">
        <h1 className="mb-6 font-bold text-2xl" > <span className="text-[#1A9951] ">▼</span> আজ দাম কমেছে</h1>
        <div className=" grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {
             ProductsPriceDownSorting.slice(0,6).map(product=><div key={product.id}>
            <ProductsCards product={product} ></ProductsCards>
           </div>)
          }
        </div>
       </div>
         {/* সব পণ্যাটি দেখানো হবে */}
           <div className="container mx-auto mt-8 mb-10">
         <h1 id="products"  className="mb-3 font-bold text-2xl" >সব পণ্য</h1>
        <p className="mb-3">মোট {allProducts.length}টি পণ্য দেখানো হচ্ছে</p>
        <div className=" grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {
             allProducts.map(product=><div key={product.id}>
            <ProductsCards product={product} ></ProductsCards>
           </div>)
          }
        </div>
       </div>
    </div>
  );
}
