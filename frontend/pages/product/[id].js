import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import { useCart } from "../../components/Cart";

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
    try {
      const response = await fetch(`http://localhost:5000/api/products/${id}`);
      const data = await response.json();
      setProduct(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching product:", error);
      setLoading(false);
    }
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
                        className="w-5 h-5 fill-current"
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
