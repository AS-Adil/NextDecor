import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 ">
      <div className="max-w-7xl mx-auto px-4 py-12">

        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              NextDecor
            </h2>
            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
              NextDecor is a modern home décor marketplace offering
              thoughtfully designed furniture, lighting, rugs, and wall art
              to elevate your living space.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-600 hover:text-black">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/items" className="text-gray-600 hover:text-black">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-gray-600 hover:text-black">
                  Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
              Categories
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>Furniture</li>
              <li>Lighting</li>
              <li>Wall Art</li>
              <li>Rugs</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
              Contact
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>Email: support@nextdecor.com</li>
              <li>Phone: +880 1234 567890</li>
              <li>Location: Dhaka, Bangladesh</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-gray-300 pt-6 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} NextDecor. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
