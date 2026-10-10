import React from 'react'

const HeadingDitilesPage = ({data}) => {
  return (
    <div>
      <div className="container mx-auto mt-8 flex flex-col justify-between items-center gap-6 rounded-2xl border border-[#E1E8E1] bg-white p-4 sm:p-6 lg:flex-row lg:items-center">

  {/* Product Information */}
  <div className="flex items-center gap-4 sm:gap-5">
    <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-[#F0F5F0] p-3 sm:h-24 sm:w-24">
      <span>{data?.image}</span>
    </div>

    <div className="min-w-0">
      <h1 className="text-lg font-bold text-[#263526] sm:text-2xl">
        {data?.nameBn}
      </h1>

      <p className="mt-1 text-sm text-gray-500">
        প্রতি {data?.unit} {data?.categoryNameBn}
      </p>

      <p className="mt-2 text-sm leading-6 text-gray-600">
        গতকালের তুলনায় আজ দাম {"  "}
        <span
          className={
            data?.change?.dir === "up"
              ? "font-medium text-[#D03739]"
              : data?.change?.dir === "down"
                ? "font-medium text-[#1A9951]"
                : "font-medium text-gray-500"
          }
        >
          {data?.change?.dir === "up"
            ? "বেড়েছে"
            : data?.change?.dir === "down"
              ? "কমেছে"
              : "অপরিবর্তিত"}
        </span>

        {data?.change?.dir !== "flat" && (
          <span>
              {Math.abs(data?.today - data?.yesterday)} টাকা
          </span>
        )}
      </p>
    </div>
  </div>

  {/* Today's Price */}
  <div className="flex flex-col items-center justify-center gap-1 rounded-xl bg-[#F5F8F4] px-4 py-3 text-center ">
    <div>
      <p className="text-sm font-medium text-gray-500">
        আজকের দাম
      </p>

      <p className=" text-1xl font-bold text-[#263526] sm:text-2xl">
        {data?.today}
      </p>

      <p className=" text-xs text-gray-500">
        টাকা / {data?.unit}
      </p>
    </div>

    <p className="shrink-0 rounded-full bg-white px-3 py-1.5 text-sm font-semibold shadow-sm">
      {data?.change?.dir === "up" ? (
        <span className="text-[#D03739]">
          ▲ {Math.abs(data?.change?.pct)}%
        </span>
      ) : data?.change?.dir === "down" ? (
        <span className="text-[#1A9951]">
          ▼ {Math.abs(data?.change?.pct)}%
        </span>
      ) : (
        <span className="text-gray-500">
          {data?.change?.pct}%
        </span>
      )}
    </p>
  </div>

</div>
    </div>
  )
}

export default HeadingDitilesPage
