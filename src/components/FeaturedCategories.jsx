import React from "react";
import { FaCouch, FaLightbulb, FaLayerGroup, FaPaintBrush } from "react-icons/fa";

// then use FaLayerGroup instead of FaRug


const FeaturedCategories = () => {
  const categories = [
    {
      name: "Furniture",
      icon: <FaCouch className="w-10 h-10 text-white" />,
      bgColor: "bg-blue-600",
    },
    {
      name: "Lighting",
      icon: <FaLightbulb className="w-10 h-10 text-white" />,
      bgColor: "bg-yellow-500",
    },
    {
      name: "Rugs",
      icon: <FaLayerGroup className="w-10 h-10 text-white" />,
      bgColor: "bg-green-500",
    },
    {
      name: "Wall Art",
      icon: <FaPaintBrush className="w-10 h-10 text-white" />,
      bgColor: "bg-pink-500",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl text-black font-bold mb-12">
          Featured Categories
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="flex bg-white flex-col items-center justify-center p-6 rounded-lg shadow hover:shadow-lg transition cursor-pointer"
            >
              <div
                className={`${cat.bgColor} w-16 h-16 flex items-center justify-center rounded-full mb-4`}
              >
                {cat.icon}
              </div>
              <h3 className="text-xl font-semibold text-black">{cat.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
