import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative w-full h-[80vh]">
      {/* Background Image */}
      <Image
        // src="https://i.ibb.co/JRdyvqCV/your-image.jpg"
        src="https://i.ibb.co.com/8ts06FR/Bamboo-Pendant-Lamp.jpg"
        alt="NextDecor Hero"
        fill
        style={{ objectFit: "cover" }}
        className="z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/25 z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Transform Your Home with NextDecor
        </h1>
        <p className="text-white text-lg md:text-xl mb-8 max-w-xl">
          Discover premium furniture and decor that elevates your living space.
        </p>
        <Link href={"/all-products"} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition transform hover:scale-105 cursor-pointer">
          Explore All Products
        </Link>
      </div>
    </section>
  );
};

export default Hero;
