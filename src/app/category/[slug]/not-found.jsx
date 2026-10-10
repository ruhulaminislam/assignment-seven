import Link from "next/link";

export default function NotFound() {
return ( <div className="container mx-auto flex min-h-[60vh] items-center justify-center px-4"> <div className="w-full max-w-md rounded-2xl border border-[#E1E8E1] bg-[#FAFCFA] p-8 text-center"> <div className="mb-4 text-6xl">🔍</div>


    <h1 className="text-2xl font-bold text-[#263526]">
      ক্যাটাগরি খুঁজে পাওয়া যায়নি!
    </h1>

    <p className="mt-3 text-sm leading-6 text-gray-600">
      দুঃখিত, এই ক্যাটাগরিটি পাওয়া যায়নি অথবা
      এই ক্যাটাগরিতে বর্তমানে কোনো পণ্য নেই।
    </p>

    <Link
      href="/"
      className="mt-6 inline-flex rounded-xl bg-[#047F39] px-5 py-3 font-medium text-white transition hover:bg-[#03652E]"
    >
      হোম পেজে ফিরে যান
    </Link>
  </div>
</div>


);
}
