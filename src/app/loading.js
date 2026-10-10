// একটি Skeleton কার্ড, আসল ProductsCards-এর আকৃতির মতো
function SkeletonCard() {
  return (
    <div className="rounded-xl border border-gray-200 p-4 animate-pulse">
      {/* ছবির জায়গা */}
      <div className="h-32 w-full rounded-lg bg-gray-200" />

      {/* পণ্যের নাম */}
      <div className="mt-4 h-4 w-3/4 rounded bg-gray-200" />

      {/* দাম ও পরিবর্তন */}
      <div className="mt-3 flex items-center justify-between">
        <div className="h-4 w-1/4 rounded bg-gray-200" />
        <div className="h-4 w-1/5 rounded bg-gray-200" />
      </div>
    </div>
  );
}

// একটি সেকশনের Skeleton (হেডিং + কার্ডের গ্রিড)
function SkeletonSection({ count = 6 }) {
  return (
    <div className="container mx-auto mt-8">
      <div className="mb-6 h-7 w-48 animate-pulse rounded bg-gray-200" />
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: count }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </div>
  );
}

export default function Loading() {
  return (
    <div>
      {/* Banner-এর জায়গা */}
      <div className="h-64 w-full animate-pulse bg-gray-200" />

      <SkeletonSection /> {/* আজ দাম বেড়েছে */}
      <SkeletonSection /> {/* আজ দাম কমেছে */}
      <SkeletonSection count={9} /> {/* সব পণ্য */}
    </div>
  );
}