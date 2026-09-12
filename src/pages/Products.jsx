import React, { useState } from 'react';
import { useSearchParams } from 'react-router';
import { SlidersHorizontal, Search, RotateCcw } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'All';
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('default');

  const categories = ['All', 'Clothing', 'Fashion', 'Footwear', 'Accessories', 'Beauty', 'Home Decor'];

  const handleCategoryChange = (cat) => {
    if (cat === 'All') searchParams.delete('category');
    else searchParams.set('category', cat);
    setSearchParams(searchParams);
  };

  const resetFilters = () => {
    setSearchQuery(''); setSortBy('default'); setSearchParams({});
  };

  const filteredProducts = products
    .filter((p) => {
      const matchesCategory = categoryParam === 'All' || p.category === categoryParam;
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            p.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      return 0;
    });

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-stone-50 border-b border-stone-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-stone-900">Aura Boutique</h1>
          <p className="text-stone-500 text-sm mt-2 max-w-xl mx-auto font-light">
            Browse our entire collection of premium clothing, footwear, active beauty care, and minimalist accessories.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-4 justify-between items-center pb-8 border-b border-stone-100 mb-8">
          <div className="flex flex-wrap gap-2 w-full lg:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`text-xs font-semibold px-4 py-2 rounded-full transition-colors cursor-pointer ${
                  categoryParam === cat ? 'bg-emerald-800 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto items-stretch">
            <div className="relative flex-grow sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-stone-50 text-stone-800 text-xs pl-9 pr-4 py-2.5 rounded-md border border-stone-200 focus:outline-none focus:border-emerald-800"
              />
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-stone-50 text-stone-700 text-xs px-4 py-2.5 rounded-md border border-stone-200 focus:outline-none focus:border-emerald-800 cursor-pointer"
            >
              <option value="default">Sort: Default</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="flex justify-between items-center mb-6">
          <p className="text-xs text-stone-500">
            Showing <span className="font-semibold text-stone-800">{filteredProducts.length}</span> products
          </p>
          {(categoryParam !== 'All' || searchQuery !== '' || sortBy !== 'default') && (
            <button onClick={resetFilters} className="inline-flex items-center gap-1.5 text-xs text-rose-600 hover:text-rose-800 font-semibold cursor-pointer">
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Filters</span>
            </button>
          )}
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        ) : (
          <div className="text-center py-20 border border-dashed border-stone-200 rounded-lg bg-stone-50">
            <SlidersHorizontal className="w-10 h-10 text-stone-300 mx-auto mb-4" />
            <h3 className="font-serif font-bold text-stone-800 text-lg">No Products Found</h3>
            <p className="text-stone-500 text-sm font-light mt-1 max-w-sm mx-auto">
              We couldn't find any products matching your query.
            </p>
            <button onClick={resetFilters} className="mt-6 bg-stone-900 hover:bg-emerald-800 text-white text-xs font-semibold px-5 py-2.5 rounded-md cursor-pointer">
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
