import Link from "next/link";
import Image from "next/image";

const ProductCard = ({ product }) => {
  const {
    _id,
    name,
    category,
    price,
    image,
    description,
  } = product;

//   console.log(_id,"---------------------------");

  // Show half description
  const shortDescription =
    description.length > 100
      ? description.slice(0, 100) + "..."
      : description;

  return (
    <div className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition bg-white">
      {/* Image */}
      <div className="relative h-56 w-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2">
        <span className="text-sm text-gray-500">{category}</span>

        <h2 className="text-lg text-black font-semibold">{name}</h2>

        <p className="text-sm text-gray-600">{shortDescription}</p>

        <div className="flex items-center justify-between mt-3">
          <span className="text-lg font-bold text-gray-600">${price}</span>

          <Link
            href={`/all-products/${_id}`}
            className="px-4 text-black shadow-md py-2 text-sm font-medium border border-black rounded-lg hover:bg-black hover:text-white transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
