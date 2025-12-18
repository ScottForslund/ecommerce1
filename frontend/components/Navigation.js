import React from "react";
import Link from "next/link";
import { useCart } from "./Cart";

export default function Navigation() {
  const { getItemCount, setIsOpen } = useCart();
  const itemCount = getItemCount();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-blue-900">
              Montana Store
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-900 transition"
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="text-gray-700 hover:text-blue-900 transition"
            >
              Shop
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-blue-900 transition"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-blue-900 transition"
            >
              Contact
            </Link>
          </div>

          {/* Cart Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="relative flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span>Cart</span>
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden pb-4">
          <div className="flex flex-col space-y-2">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-900 transition py-2"
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="text-gray-700 hover:text-blue-900 transition py-2"
            >
              Shop
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-blue-900 transition py-2"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-blue-900 transition py-2"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
