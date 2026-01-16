import ProductCard from "@/components/ProductCard";
import React from "react";

const AllProducts = async () => {
  const res = await fetch(
    "https://server-hazel-zeta-81.vercel.app/all-products",
    { cache: "no-store" }
  );

  const products = await res.json();

//   console.log(products);

  return (
<div className="bg-white ">
        <h1 className="text-center text-black text-4xl font-semibold pt-6">All Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-7">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
</div>
  );
};

export default AllProducts;
