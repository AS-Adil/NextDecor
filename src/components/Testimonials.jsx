import React from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Sophia Lee",
    role: "Interior Designer",
    quote:
      "NextDecor transformed my living space! High-quality furniture with stunning design.",
    rating: 5,
    img: "https://randomuser.me/api/portraits/men/21.jpg", // male photo
  },
  {
    name: "James Smith",
    role: "Homeowner",
    quote:
      "Beautiful products, excellent service, and fair pricing. Highly recommend!",
    rating: 4,
    img: "https://randomuser.me/api/portraits/men/32.jpg", // male photo
  },
  {
    name: "Emily Davis",
    role: "Architect",
    quote:
      "Modern designs and premium materials. My clients are always impressed.",
    rating: 5,
    img: "https://randomuser.me/api/portraits/men/45.jpg", // male photo
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
          What Our Customers Say
        </h2>
        <p className="text-gray-600 mb-12">
          Hear from our satisfied clients who transformed their homes with NextDecor.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <img
                src={t.img}
                alt={t.name}
                className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold text-black">{t.name}</h3>
              <p className="text-gray-500 text-sm mb-2">{t.role}</p>
              <div className="flex justify-center mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 w-4 h-4" />
                ))}
              </div>
              <p className="text-gray-600 text-sm">{t.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
