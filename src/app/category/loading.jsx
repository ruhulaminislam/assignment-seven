// app/category/[categorySlug]/loading.jsx
// Server Component — no hooks, no data fetching. Next.js shows this
// automatically while page.jsx is loading.

const SKELETON_COLOR = "bg-[#E8EFE8]";

const ProductCardSkeleton = () => (
  <div className="flex flex-col rounded-2xl border border-[#E1E8E1] bg-[#FAFCFA] p-5">
    {/* Product info */}
    <div className="flex items-center gap-4">
      <div className="h-14 w-14 shrink-0 rounded-xl bg-[#F0F5F0]" />
      <div className="flex-1 space-y-2">
        <div className={`h-4 w-3/4 rounded-md ${SKELETON_COLOR}`} />
        <div className={`h-3 w-1/3 rounded-md ${SKELETON_COLOR}`} />
      </div>
    </div>

    {/* Label */}
    <div className={`mt-6 h-3 w-20 rounded-md ${SKELETON_COLOR}`} />

    {/* Price + change badge */}
    <div className="mt-2 flex items-center justify-between gap-3">
      <div className={`h-7 w-32 rounded-md ${SKELETON_COLOR}`} />
      <div className="h-7 w-16 rounded-full bg-[#F0F5F0]" />
    </div>
  </div>
);

const Loading = () => {
  return (
    <div
      className="min-h-screen bg-[#FAFCFA]"
      role="status"
      aria-busy="true"
      aria-live="polite"
    >
      <span className="sr-only">লোড হচ্ছে...</span>

      <div className="container mx-auto animate-pulse px-4 py-8">
        {/* Category header */}
        <div className="mb-6 flex items-center gap-4">
          <div className="h-16 w-16 shrink-0 rounded-2xl border border-[#E1E8E1] bg-[#047F39]/10" />
          <div className="flex-1 space-y-3">
            <div className={`h-7 w-40 rounded-md sm:w-56 ${SKELETON_COLOR}`} />
            <div className={`h-4 w-28 rounded-md ${SKELETON_COLOR}`} />
          </div>
        </div>

        {/* Sorting control */}
        <div className="mb-6 flex items-center justify-end gap-3 rounded-2xl border border-[#E1E8E1] px-4 py-3">
          <div className={`h-4 w-12 rounded-md ${SKELETON_COLOR}`} />
          <div className="h-10 w-40 rounded-lg border border-[#E1E8E1] bg-[#F0F5F0] sm:w-48" />
        </div>

        {/* Products count */}
        <div className="mt-8">
          <div className={`mb-6 h-4 w-52 rounded-md ${SKELETON_COLOR}`} />

          {/* Products grid */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 9 }).map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;