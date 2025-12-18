import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import { useCart } from "../components/Cart";

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const { addToCart } = useCart();

  useEffect(() => {
    if (id) {
      fetchProduct();
    }
  }, [id]);

  const fetchProduct = async () => {
    // Mock products data
    const mockProducts = {
      1: {
        _id: "1",
        name: "Montana Outdoor Jacket",
        description:
          "Premium waterproof jacket perfect for Big Sky Country weather. Durable, warm, and stylish for Montana adventures. Features include reinforced stitching, multiple pockets, and breathable fabric that keeps you comfortable in any weather condition.",
        price: 149.99,
        category: "outdoor",
        images: [
          "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600",
          "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600",
        ],
        stock: 50,
        badge: "New",
        tags: ["outdoor", "jacket", "waterproof", "montana"],
        ratings: { average: 4.8, count: 24 },
      },
      2: {
        _id: "2",
        name: "Montana Coffee Blend",
        description:
          "Locally roasted premium coffee beans. Rich, smooth, and perfect for early Montana mornings. Sourced from the finest coffee regions and roasted right here in Montana for maximum freshness and flavor.",
        price: 24.99,
        category: "other",
        images: [
          "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600",
          "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600",
        ],
        stock: 100,
        badge: "Hot",
        tags: ["coffee", "local", "beverage", "montana"],
        ratings: { average: 4.9, count: 42 },
      },
      3: {
        _id: "3",
        name: "Hiking Boots - Montana Trail",
        description:
          "Rugged hiking boots designed for Montana's diverse terrain. Comfortable and built to last through all seasons. Waterproof construction, superior ankle support, and aggressive tread pattern for maximum traction on any trail.",
        price: 189.99,
        category: "outdoor",
        images: [
          "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=600",
          "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=600",
        ],
        stock: 30,
        badge: "Sale",
        tags: ["hiking", "boots", "outdoor", "montana"],
        ratings: { average: 4.7, count: 18 },
      },
      4: {
        _id: "4",
        name: "Montana Wool Blanket",
        description:
          "Handcrafted wool blanket perfect for cold Montana nights. Warm, cozy, and made with local materials. Each blanket is carefully woven using traditional techniques and features authentic Montana patterns.",
        price: 89.99,
        category: "home",
        images: [
          "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600",
          "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600",
        ],
        stock: 25,
        badge: "New",
        tags: ["blanket", "wool", "home", "montana"],
        ratings: { average: 4.6, count: 15 },
      },
      5: {
        _id: "5",
        name: "Fishing Rod - Big Sky Series",
        description:
          "Professional-grade fishing rod perfect for Montana's rivers and lakes. Lightweight and durable. Designed specifically for Montana's unique fishing conditions with premium components and expert craftsmanship.",
        price: 129.99,
        category: "sports",
        images: [
          "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600",
          "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600",
        ],
        stock: 40,
        badge: "Hot",
        tags: ["fishing", "sports", "outdoor", "montana"],
        ratings: { average: 4.8, count: 31 },
      },
      6: {
        _id: "6",
        name: "Montana Honey - Wildflower",
        description:
          "Pure Montana wildflower honey. Raw, unfiltered, and harvested from local Montana apiaries. This golden honey captures the essence of Montana's wildflowers and is packed with natural enzymes and nutrients.",
        price: 18.99,
        category: "other",
        images: [
          "https://images.unsplash.com/photo-1587049352846-4a222e784acc?w=600",
          "https://images.unsplash.com/photo-1587049352846-4a222e784acc?w=600",
        ],
        stock: 75,
        badge: "New",
        tags: ["honey", "local", "food", "montana"],
        ratings: { average: 5.0, count: 56 },
      },
    };

    setTimeout(() => {
      const product = mockProducts[id];
      setProduct(product || null);
      setLoading(false);
    }, 300);
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl">Loading...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Link href="/shop" className="text-blue-600 hover:underline">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{product.name} - Montana Store</title>
        <meta name="description" content={product.description} />
      </Head>

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Breadcrumb */}
          <div className="mb-8 text-sm">
            <Link href="/" className="text-gray-600 hover:text-blue-900">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/shop" className="text-gray-600 hover:text-blue-900">
              Shop
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{product.name}</span>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 p-8">
              {/* Image Gallery */}
              <div>
                <div className="mb-4 bg-gray-100 rounded-lg overflow-hidden aspect-square">
                  <img
                    src={
                      product.images[selectedImage] ||
                      "https://via.placeholder.com/600"
                    }
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {product.images.length > 1 && (
                  <div className="grid grid-cols-4 gap-2">
                    {product.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`border-2 rounded-lg overflow-hidden ${
                          selectedImage === index
                            ? "border-blue-900"
                            : "border-gray-200"
                        }`}
                      >
                        <img
                          src={image}
                          alt={`${product.name} ${index + 1}`}
                          className="w-full h-20 object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div>
                {product.badge && (
                  <span className="inline-block bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    {product.badge}
                  </span>
                )}

                <h1 className="text-4xl font-bold mb-4">{product.name}</h1>

                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.ratings?.average || 0)
                            ? "fill-current"
                            : "fill-gray-300"
                        }`}
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600">
                    ({product.ratings?.count || 0} reviews)
                  </span>
                </div>

                <div className="text-4xl font-bold text-blue-900 mb-6">
                  ${product.price}
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  {product.description}
                </p>

                <div className="mb-6">
                  <span
                    className={`font-semibold ${
                      product.stock > 0 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {product.stock > 0
                      ? `In Stock (${product.stock} available)`
                      : "Out of Stock"}
                  </span>
                </div>

                {/* Quantity Selector */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold mb-2">
                    Quantity:
                  </label>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-10 border border-gray-300 rounded-lg hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span className="text-xl font-semibold w-12 text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() =>
                        setQuantity(Math.min(product.stock, quantity + 1))
                      }
                      className="w-10 h-10 border border-gray-300 rounded-lg hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={handleAddToCart}
                  disabled={product.stock === 0}
                  className="w-full bg-black text-white py-4 rounded-lg font-semibold hover:bg-gray-800 transition disabled:bg-gray-400 disabled:cursor-not-allowed mb-4"
                >
                  {product.stock > 0 ? "Add to Cart" : "Out of Stock"}
                </button>

                {/* Category & Tags */}
                <div className="border-t pt-6">
                  <div className="mb-3">
                    <span className="font-semibold">Category:</span>
                    <span className="ml-2 text-gray-600 capitalize">
                      {product.category}
                    </span>
                  </div>
                  {product.tags && product.tags.length > 0 && (
                    <div>
                      <span className="font-semibold">Tags:</span>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {product.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
