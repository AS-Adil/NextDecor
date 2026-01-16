import React from "react";
import Link from "next/link";

const CallToAction = () => {
  return (
    <section className="py-20 bg-white text-white">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-4xl text-black md:text-5xl font-bold mb-6">
          Explore Our Collection
        </h2>
        <p className="text-lg text-gray-500 md:text-xl mb-8">
          Discover premium furniture and decor that elevates your home.
        </p>
        <Link
          href="/all-products"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition transform hover:scale-105 cursor-pointer"
        >
          Explore Now
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;
