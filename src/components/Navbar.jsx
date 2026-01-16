"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  // Check auth cookie
  useEffect(() => {
    const authCookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("auth="));

    setIsLoggedIn(authCookie?.split("=")[1] === "true");
  }, []);

  const linkClass = (path) =>
    `font-medium transition ${
      pathname === path
        ? "text-black border-b-2 border-black"
        : "text-gray-600 hover:text-black"
    }`;

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Bar */}
        <div className="flex h-16 items-center justify-between">
          {/* LEFT */}
          <div className="flex items-center gap-3">
            {/* Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-md"
              aria-label="Toggle Menu"
            >
              ☰
            </button>

            {/* Logo */}
            <Link href="/" className="text-2xl font-bold text-black">
              NextDecor
            </Link>
          </div>

          {/* CENTER (desktop) */}
          <div className="hidden md:flex items-center gap-8 text-lg font-medium">
            <Link href="/" className={linkClass("/")}>
              Home
            </Link>
            <Link
              href="/all-products"
              className={linkClass("/all-products")}
            >
              All Products
            </Link>
          </div>

          {/* RIGHT */}
          <div className="flex items-center">
            {!isLoggedIn ? (
              <Link
                href="/login"
                className="px-4 py-2 bg-black text-white rounded-md text-sm hover:bg-gray-800 transition"
              >
                Login
              </Link>
            ) : (
              <button
              
                className="w-9 h-9 rounded-full overflow-hidden border border-gray-300"
                title="Logged In"
              >
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="User"
                  className="w-full h-full object-cover"
                />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="flex flex-col px-4 py-4 space-y-4">
            <Link
              href="/"
              className={linkClass("/")}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/all-products"
              className={linkClass("/all-products")}
              onClick={() => setIsOpen(false)}
            >
              All Products
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
