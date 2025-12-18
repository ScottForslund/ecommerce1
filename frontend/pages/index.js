import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { useCart } from "../components/Cart";

export default function Home() {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    fetchFeaturedProducts();
  }, []);

  const fetchFeaturedProducts = async () => {
    // Mock data for static demo
    const mockProducts = [
      {
        _id: "1",
        name: "Montana Outdoor Jacket",
        description:
          "Premium waterproof jacket perfect for Big Sky Country weather. Durable, warm, and stylish.",
        price: 149.99,
        category: "outdoor",
        images: [
          "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400",
        ],
        stock: 50,
        featured: true,
        badge: "New",
        tags: ["outdoor", "jacket", "waterproof"],
      },
      {
        _id: "2",
        name: "Montana Coffee Blend",
        description:
          "Locally roasted premium coffee beans. Rich, smooth, and perfect for early Montana mornings.",
        price: 24.99,
        category: "other",
        images: [
          "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400",
        ],
        stock: 100,
        featured: true,
        badge: "Hot",
        tags: ["coffee", "local", "beverage"],
      },
      {
        _id: "3",
        name: "Hiking Boots - Montana Trail",
        description:
          "Rugged hiking boots designed for Montana's diverse terrain. Comfortable and built to last.",
        price: 189.99,
        category: "outdoor",
        images: [
          "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=400",
        ],
        stock: 30,
        featured: true,
        badge: "Sale",
        tags: ["hiking", "boots", "outdoor"],
      },
      {
        _id: "4",
        name: "Montana Wool Blanket",
        description:
          "Handcrafted wool blanket perfect for cold Montana nights. Warm, cozy, and made with local materials.",
        price: 89.99,
        category: "home",
        images: [
          "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400",
        ],
        stock: 25,
        featured: true,
        badge: "New",
        tags: ["blanket", "wool", "home"],
      },
      {
        _id: "5",
        name: "Fishing Rod - Big Sky Series",
        description:
          "Professional-grade fishing rod perfect for Montana's rivers and lakes. Lightweight and durable.",
        price: 129.99,
        category: "sports",
        images: [
          "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400",
        ],
        stock: 40,
        featured: true,
        badge: "Hot",
        tags: ["fishing", "sports", "outdoor"],
      },
      {
        _id: "6",
        name: "Montana Honey - Wildflower",
        description:
          "Pure Montana wildflower honey. Raw, unfiltered, and harvested from local Montana apiaries.",
        price: 18.99,
        category: "other",
        images: [
          "https://images.unsplash.com/photo-1587049352846-4a222e784acc?w=400",
        ],
        stock: 75,
        featured: true,
        badge: "New",
        tags: ["honey", "local", "food"],
      },
    ];

    // Simulate API delay
    setTimeout(() => {
      setFeaturedProducts(mockProducts);
      setIsLoading(false);
    }, 500);
  };
  return (
    <>
      <Head>
        <title>Montana Store - Premium Products for Big Sky Country</title>
        <meta
          name="description"
          content="Discover premium products perfect for Montana businesses and lifestyle"
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-purple-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
          <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Your Premier Online Store
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Quality products for Our Customers
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/shop">
                <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition transform hover:scale-105">
                  Shop Now
                </button>
              </Link>
              <Link href="/about">
                <button className="border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">
              Featured Products
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Handpicked Products for Quality
            </p>

            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="bg-gray-200 animate-pulse h-96 rounded-lg"
                  ></div>
                ))}
              </div>
            ) : featuredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {featuredProducts.map((product) => (
                  <ProductCard
                    key={product._id}
                    product={product}
                    onAddToCart={addToCart}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600 mb-4">
                  No products yet. Add some to get started!
                </p>
                <p className="text-sm text-gray-500">
                  Run:{" "}
                  <code className="bg-gray-100 px-2 py-1 rounded">
                    node seed.js
                  </code>{" "}
                  in the backend folder
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Trust Badges */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <TrustBadge
                icon="🚚"
                title="Montana Delivery"
                subtitle="Fast shipping statewide"
              />
              <TrustBadge
                icon="🔒"
                title="Secure Payment"
                subtitle="100% protected"
              />
              <TrustBadge
                icon="↩️"
                title="Easy Returns"
                subtitle="30-day guarantee"
              />
              <TrustBadge
                icon="⭐"
                title="Local Support"
                subtitle="Montana-based team"
              />
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-20 bg-black text-white">
          <div className="max-w-2xl mx-auto text-center px-4">
            <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
            <p className="mb-8 text-gray-300">
              Get exclusive deals and Montana business updates
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-black"
              />
              <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="group cursor-pointer bg-white rounded-lg shadow-md hover:shadow-xl transition">
      <Link href={`/product/${product._id}`}>
        <div className="relative overflow-hidden rounded-t-lg bg-gray-100 aspect-square">
          <img
            src={product.images[0] || "https://via.placeholder.com/400"}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
          />
          {product.badge && (
            <span className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              {product.badge}
            </span>
          )}
        </div>
      </Link>
      <div className="p-4">
        <Link href={`/product/${product._id}`}>
          <h3 className="font-semibold text-lg mb-2 hover:text-blue-900 cursor-pointer">
            {product.name}
          </h3>
        </Link>
        <p className="text-gray-600 mb-2 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold">${product.price}</span>
          <button
            onClick={() => onAddToCart(product)}
            className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

function TrustBadge({ icon, title, subtitle }) {
  return (
    <div>
      <div className="text-4xl mb-2">{icon}</div>
      <h3 className="font-semibold mb-1">{title}</h3>
      <p className="text-sm text-gray-600">{subtitle}</p>
    </div>
  );
}
