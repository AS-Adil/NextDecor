import React from "react";
import { FaTree, FaGem, FaLeaf, FaCouch, FaFeather } from "react-icons/fa";

const MaterialsSection = () => {
  const materials = [
    {
      name: "Wood",
      icon: <FaTree className="w-10 h-10 text-white" />,
      bgColor: "bg-yellow-700",
    },
    {
      name: "Marble",
      icon: <FaGem className="w-10 h-10 text-white" />,
      bgColor: "bg-gray-400",
    },
    {
      name: "Bamboo",
      icon: <FaLeaf className="w-10 h-10 text-white" />,
      bgColor: "bg-green-600",
    },
    {
      name: "Velvet",
      icon: <FaCouch className="w-10 h-10 text-white" />,
      bgColor: "bg-purple-600",
    },
    {
      name: "Wool",
      icon: <FaFeather className="w-10 h-10 text-white" />,
      bgColor: "bg-red-500",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-12">
          Craftsmanship & Materials
        </h2>
        <p className="text-gray-600 mb-12">
          We carefully select materials that blend durability and elegance.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          {materials.map((material, idx) => (
            <div
              key={idx}
              className="flex bg-gray-50 flex-col items-center justify-center p-6 rounded-lg shadow hover:shadow-lg transition cursor-pointer"
            >
              <div
                className={`${material.bgColor} w-16 h-16 flex items-center justify-center rounded-full mb-4`}
              >
                {material.icon}
              </div>
              <h3 className="text-lg font-semibold text-black">{material.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MaterialsSection;
