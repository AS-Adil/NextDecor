import React from "react";
import { FaCouch, FaPalette, FaTags } from "react-icons/fa";

const WhyChoose = () => {
  const features = [
    {
      icon: <FaCouch className="w-10 h-10 text-blue-600 mb-4" />,
      title: "Quality Materials",
      description: "We use premium materials to ensure durability and comfort.",
    },
    {
      icon: <FaPalette className="w-10 h-10 text-blue-600 mb-4" />,
      title: "Modern Design",
      description: "Sleek, stylish, and contemporary designs for every home.",
    },
    {
      icon: <FaTags className="w-10 h-10 text-blue-600 mb-4" />,
      title: "Fair Pricing",
      description: "High-quality products at prices that fit your budget.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl text-black font-bold mb-4">
          Why Choose NextDecor
        </h2>
        <p className="text-gray-600 mb-12">
          Quality materials, modern design, fair pricing
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition text-center"
            >
              {feature.icon}
              <h3 className="text-xl font-semibold text-black mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
