
import { notFound } from "next/navigation";
import SelectedOption from "@/componunts/SelectedOption";
import { Suspense } from "react";



const page = async ({ params }) => {
  const { slug } = await params;

  const res = await fetch(`https://openapi.programming-hero.com/api/bazardor/products?category=${slug}`);
  const allProducts = await res.json();
  const res2 = await fetch(`https://openapi.programming-hero.com/api/bazardor/categories/${slug}`);
  if (!res2.ok) {
  notFound();
}
  const category = await res2.json();
if (!category?.nameBn) {
  notFound();
}
  console.log(category);
  return (
    <Suspense fallback={<div>লোড হচ্ছে...</div>}>
    <div className="mt-10">
      <div className="container mx-auto mb-6 flex items-center gap-1 px-4 border rounded-2xl border-[#E1E8E1] py-3">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl  text-2xl">
          {category.icon}
        </div>

        <div>
          <h1 className="text-xl font-bold">{category.nameBn}</h1>

          <p className="text-sm text-base-content/60">
            {allProducts.length}টি পণ্যের আজকের দাম ও পরিবর্তন
          </p>
        </div>
      </div>
       <div>
        <SelectedOption allProducts={allProducts}></SelectedOption>
       </div>
       </div>
       </Suspense>
  );
};

export default page;
