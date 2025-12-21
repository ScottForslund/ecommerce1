import React from "react";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - "Montana Store"</title>
        <meta
          name="description"
          content="Learn about Montana Store and our commitment to Big Sky Country"
        />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4">About Montana Store</h1>
            <p className="text-xl">
              Serving our Customers with Quality Products
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-16">
          {/* Our Story */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="prose prose-lg">
              <p className="text-gray-700 mb-4">
                Our Store was born from a passion for providing quality
                products. We are committed to delivering products that meet the
                highest standards.
              </p>
              <p className="text-gray-700 mb-4">
                Our journey began with a simple mission: to connect people with
                the products they need to thrive. Today, we're proud to serve
                communities all over Montana!
              </p>
            </div>
          </section>

          {/* Our Values */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4">🏔️</div>
                <h3 className="text-xl font-bold mb-2">Montana First</h3>
                <p className="text-gray-600">
                  We prioritize Customer Service and understand the unique
                  challenges of online shopping.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4">✨</div>
                <h3 className="text-xl font-bold mb-2">Quality Products</h3>
                <p className="text-gray-600">
                  Every product we offer is carefully selected to meet our high
                  standards for quality and durability.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold mb-2">Customer Service</h3>
                <p className="text-gray-600">
                  Our team is always ready to help with personalized service and
                  local expertise.
                </p>
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">
              Made In Montana, For Everyone!
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <strong className="text-lg">
                      Quick shipping to all areas of Big Sky Country!
                    </strong>
                    <p className="text-gray-600">
                      Quick shipping to all corners of the beautiful and vast
                      state of Montana!
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <strong className="text-lg">Local Support Team</strong>
                    <p className="text-gray-600">
                      Customer service that understands your needs
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <strong className="text-lg">Curated Selection</strong>
                    <p className="text-gray-600">
                      Products chosen specifically for businesses and lifestyles
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <strong className="text-lg">Competitive Pricing</strong>
                    <p className="text-gray-600">
                      Fair prices with no hidden fees or surprises
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center bg-blue-900 text-white p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-6">
              Contact us today to learn how we can serve your business
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Contact Us
            </a>
          </section>
        </div>
      </div>
    </>
  );
}
