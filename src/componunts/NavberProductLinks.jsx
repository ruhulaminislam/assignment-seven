
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavberProductLinks = ({ allProducts }) => {
  const pathname = usePathname();

  return (
    <div>
      <div className="container mx-auto pl-5 py-3">
        {allProducts?.map((product) => {
          const href = `/category/${product?.slug}`;

          return (
            <Link
              className={`mr-5 rounded-md px-3 py-2 ${
                pathname === href ? "bg-[#047F39] text-white" : ""
              }`}
              href={href}
              key={product?.id}
            >
              <span>{product?.icon}</span>{" "}
              <span>{product?.nameBn}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default NavberProductLinks;
