import Image from "next/image";
import {
  FaTag,
  FaRulerCombined,
  FaBoxOpen,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";

const DetailsPage = async ({ params }) => {
  const { id } =await params;
  console.log('id===============', id);

const res = await fetch(
  `https://server-hazel-zeta-81.vercel.app/product/${id}`,
  { cache: "no-store" }
);

  const product = await res.json();
//   console.log(product);

  const {
    name,
    category,
    price,
    material,
    dimensions,
    stock,
    image,
    description,
  } = product;
  console.log(image);

  return (

    <div className="bg-white">
            <section className="max-w-7xl mx-auto px-4 py-10 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-gray-50 p-5 rounded-xl">
        {/* Image */}
        <div className="relative w-full h-[350px] sm:h-[450px] rounded-xl overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-4">
          <span className="text-sm text-gray-500">{category}</span>

          <h1 className="text-3xl font-bold text-black">{name}</h1>

          <p className="text-gray-600 leading-relaxed">{description}</p>

          {/* Price */}
          <div className="text-2xl text-gray-600 font-semibold mt-2">${price}</div>

          {/* Meta Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 text-gray-600 gap-4 mt-4">
            <div className="flex items-center gap-3">
              <FaTag className="text-lg" />
              <span className="text-sm">
                <strong>Material:</strong> {material}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <FaRulerCombined className="text-lg" />
              <span className="text-sm">
                <strong>Dimensions:</strong> {dimensions}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <FaBoxOpen className="text-lg" />
              <span className="text-sm">
                <strong>Category:</strong> {category}
              </span>
            </div>

            <div className="flex items-center gap-3">
              {stock ? (
                <>
                  <FaCheckCircle className="text-green-600 text-lg" />
                  <span className="text-sm font-medium text-green-600">
                    In Stock
                  </span>
                </>
              ) : (
                <>
                  <FaTimesCircle className="text-red-600 text-lg" />
                  <span className="text-sm font-medium text-red-600">
                    Out of Stock
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Action Button */}
<div className="mt-6">
  <span
    className={`inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium ${
      stock
        ? "bg-green-100 text-green-700"
        : "bg-red-100 text-red-700"
    }`}
  >
    {stock ? "Available" : "Unavailable"}
  </span>
</div>

        </div>
      </div>
    </section>
    </div>

  );
};

export default DetailsPage;
