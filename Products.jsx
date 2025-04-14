import { useState } from 'react';
import { motion } from 'framer-motion';
import { Leaf, ShoppingBag, Recycle } from 'lucide-react';

const allProducts = [
  { name: 'Reusable Water Bottle', category: 'Hydration', icon: <Leaf /> },
  { name: 'Organic Cotton Tote Bag', category: 'Accessories', icon: <ShoppingBag /> },
  { name: 'Biodegradable Trash Bags', category: 'Home', icon: <Recycle /> },
  { name: 'Solar Power Bank', category: 'Electronics', icon: <Leaf /> },
  { name: 'Eco-Friendly Notebook', category: 'Stationery', icon: <Recycle /> },
];

export default function Products() {
  const [search, setSearch] = useState('');

  const filteredProducts = allProducts.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <motion.div
      className="min-h-[70vh] p-8 bg-white/60 rounded-2xl shadow-xl backdrop-blur-md"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-5xl font-extrabold text-ecoDarkGreen mb-4 drop-shadow-lg">
        Our Eco-Friendly Products 🛒
      </h1>

      <p className="text-gray-700 mb-6 max-w-3xl">
        Discover a curated list of sustainable and eco-conscious products designed to reduce
        environmental impact and promote green living.
      </p>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full md:w-1/2 px-4 py-2 mb-6 border border-emerald-300 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-400"
      />

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <motion.div
              key={index}
              className="bg-white/80 p-5 rounded-xl shadow-md border border-emerald-200 backdrop-blur-sm hover:scale-105 transition-transform"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-emerald-700 text-3xl mb-2">{product.icon}</div>
              <h2 className="text-xl font-semibold text-ecoDarkGreen">{product.name}</h2>
              <p className="text-sm text-gray-600 mt-1">{product.category}</p>
            </motion.div>
          ))
        ) : (
          <p className="text-gray-500">No matching products found.</p>
        )}
      </div>
    </motion.div>
  );
}
