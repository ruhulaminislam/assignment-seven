
import React from "react";

const ProductsDitilesPage = ({ data }) => {
  const markets = data?.markets ?? [];

  const maxPrice = markets.length
    ? Math.max(...markets.map((item) => item.max))
    : 0;

  const minPrice = markets.length
    ? Math.min(...markets.map((item) => item.min))
    : 0;

  const AvaragePrice = markets.length
    ? markets.reduce((total, item) => total + (item.min + item.max) / 2, 0) /
      markets.length
    : 0;

  return (
    <div className="container mx-auto mt-8 space-y-10 px-4 py-5 mb-10 border border-[#E1E8E1] bg-[#FAFCFA] rounded-2xl">

      {/* Price Summary */}
      <section>
        <h1 className="mb-5 text-2xl font-bold text-[#1D271F]">
          দামের সারসংক্ষেপ
        </h1>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {/* Minimum Price */}
          <div className="rounded-2xl border border-[#DCEBDD] bg-white p-5 transition-shadow duration-300 hover:shadow-md">
            <p className="text-sm font-medium text-gray-500">
              সর্বনিম্ন দাম
            </p>

            <p className="mt-2 text-2xl font-bold text-[#1A9951]">
              {minPrice.toLocaleString("bn-BD")} টাকা
            </p>

            <p className="mt-2 text-sm text-gray-500">
              সবচেয়ে কম দামের বাজার
            </p>
          </div>

          {/* Maximum Price */}
          <div className="rounded-2xl border border-[#F0DCDC] bg-white p-5 transition-shadow duration-300 hover:shadow-md">
            <p className="text-sm font-medium text-gray-500">
              সর্বাধিক দাম
            </p>

            <p className="mt-2 text-2xl font-bold text-[#D03739]">
              {maxPrice.toLocaleString("bn-BD")} টাকা
            </p>

            <p className="mt-2 text-sm text-gray-500">
              সবচেয়ে বেশি দামের বাজার
            </p>
          </div>

          {/* Average Price */}
          <div className="rounded-2xl border border-[#DCE5F5] bg-white p-5 transition-shadow duration-300 hover:shadow-md sm:col-span-2 lg:col-span-1">
            <p className="text-sm font-medium text-gray-500">
              গড় দাম
            </p>

            <p className="mt-2 text-2xl font-bold text-[#05893E]">
              {Math.round(AvaragePrice).toLocaleString("bn-BD")} টাকা
            </p>

            <p className="mt-2 text-sm text-gray-500">
              বাজারগুলোর গড় মূল্য
            </p>
          </div>
        </div>
      </section>

      {/* Market Prices */}
      <section>
        <div className="mb-5">
          <h2 className="text-2xl font-bold text-[#1D271F]">
            বাজারভিত্তিক আজকের দাম
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            বিভিন্ন বাজারের সর্বনিম্ন, সর্বাধিক ও গড় দাম দেখুন।
          </p>
        </div>

        {markets?.length > 0 ? (
          <div className="overflow-x-auto rounded-2xl border border-[#E1E8E1] bg-white">
            <table className="w-full min-w-[650px] text-left">
              <thead className="bg-[#F0F5F0]">
                <tr className="text-sm text-[#526052]">
                  <th className="px-5 py-4 font-semibold">বাজার</th>
                  <th className="px-5 py-4 font-semibold">বিভাগ</th>
                  <th className="px-5 py-4 font-semibold">সর্বনিম্ন</th>
                  <th className="px-5 py-4 font-semibold">সর্বাধিক</th>
                  <th className="px-5 py-4 font-semibold">গড়</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-[#E8EEE8]">
                {markets?.map((item, index) => (
                  <tr
                    key={item?.id ?? `${item?.market}-${index}`}
                    className="transition-colors hover:bg-[#F8FAF7]"
                  >
                    <td className="px-5 py-4 font-medium text-[#263526]">
                      {item?.market}
                    </td>

                    <td className="px-5 py-4 text-gray-600">
                      {item?.division}
                    </td>

                    <td className="px-5 py-4 font-medium text-[#1A9951]">
                      {item?.min.toLocaleString("bn-BD")} টাকা
                    </td>

                    <td className="px-5 py-4 font-medium text-[#D03739]">
                      {item?.max.toLocaleString("bn-BD")} টাকা
                    </td>

                    <td className="px-5 py-4 font-semibold text-[#263526]">
                      {Math.round(
                        (item?.min + item?.max) / 2
                      ).toLocaleString("bn-BD")} টাকা
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-[#DCE5DD] px-5 py-10 text-center">
            <p className="font-medium text-gray-600">
              বর্তমানে কোনো বাজারের তথ্য পাওয়া যায়নি।
            </p>
          </div>
        )}
      </section>

    </div>
  );
};

export default ProductsDitilesPage;

