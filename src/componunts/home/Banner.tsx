
import Image from "next/image";
import React from "react";

const Banner = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <div className="container mx-auto mt-10 overflow-hidden rounded-3xl border border-[#E1E8E1] bg-[#FAFCFA]">
      <div className="flex flex-col items-center justify-between gap-8 px-6 py-10 md:flex-row md:px-10 lg:px-14">
        
        {/* Content */}
        <div className="w-full md:w-1/2">
          <p className="mb-4 inline-block rounded-full bg-[#E2F1E7] px-4 py-2 text-sm font-medium text-[#05893E]">
            {date}
          </p>

          <h1 className="text-3xl font-bold leading-tight text-[#1D271F] md:text-4xl lg:text-5xl">
            আজকের বাজারের দাম
            <br />
            এক নজরে
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-[#5F6761] md:text-lg">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
            বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
          </p>

          <a href="#products"><button  className="mt-7 rounded-xl bg-[#05893E] px-6 py-3 font-medium text-[#F3FBF4] transition hover:bg-[#047535]">
            সব পণ্য দেখুন
          </button></a>
        </div>

        {/* Image */}
        <div className="flex w-full justify-center md:w-1/2">
          <Image
            src="/bazar-hero.png"
            alt="বাজারের পণ্যের ছবি"
            width={400}
            height={400}
            priority
            className="h-auto w-full max-w-md object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;

