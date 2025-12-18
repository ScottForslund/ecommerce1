const mongoose = require("mongoose");
const Product = require("./models/Product");
require("dotenv").config();

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/ecommerce"
);

const sampleProducts = [
  {
    name: "Montana Outdoor Jacket",
    description:
      "Premium waterproof jacket perfect for Big Sky Country weather. Durable, warm, and stylish for Montana adventures.",
    price: 149.99,
    category: "outdoor",
    images: ["https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400"],
    stock: 50,
    featured: true,
    badge: "New",
    tags: ["outdoor", "jacket", "waterproof", "montana"],
  },
  {
    name: "Montana Coffee Blend",
    description:
      "Locally roasted premium coffee beans. Rich, smooth, and perfect for early Montana mornings.",
    price: 24.99,
    category: "other",
    images: ["https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400"],
    stock: 100,
    featured: true,
    badge: "Hot",
    tags: ["coffee", "local", "beverage", "montana"],
  },
  {
    name: "Hiking Boots - Montana Trail",
    description:
      "Rugged hiking boots designed for Montana's diverse terrain. Comfortable and built to last through all seasons.",
    price: 189.99,
    category: "outdoor",
    images: [
      "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=400",
    ],
    stock: 30,
    featured: true,
    badge: "Sale",
    tags: ["hiking", "boots", "outdoor", "montana"],
  },
  {
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
    tags: ["blanket", "wool", "home", "montana"],
  },
  {
    name: "Fishing Rod - Big Sky Series",
    description:
      "Professional-grade fishing rod perfect for Montana's rivers and lakes. Lightweight and durable.",
    price: 129.99,
    category: "sports",
    images: ["https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400"],
    stock: 40,
    featured: true,
    badge: "Hot",
    tags: ["fishing", "sports", "outdoor", "montana"],
  },
  {
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
    tags: ["honey", "local", "food", "montana"],
  },
];

async function seedDatabase() {
  try {
    await Product.deleteMany({});
    await Product.insertMany(sampleProducts);
    console.log("✅ Database seeded with 6 Montana products!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    process.exit(1);
  }
}

seedDatabase();
