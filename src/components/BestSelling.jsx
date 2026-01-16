import ProductCard from "@/components/ProductCard";

const BestSelling = async () => {
  const res = await fetch(
    "https://server-hazel-zeta-81.vercel.app/all-products",
    { cache: "no-store" }
  );

  const products = await res.json();

  // Take first 6 products
  const bestSellingProducts = products.slice(0, 6);

  return (
<div className="bg-gray-50">
        <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-black">Best Selling Products</h2>
        <p className="text-gray-600 mt-2">
          Our most loved decor pieces, handpicked for you
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {bestSellingProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </section>
</div>
  );
};

export default BestSelling;
