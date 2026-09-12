import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import HeroCarousel from '../components/HeroCarousel';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function Home() {
  // Pick 8 representative featured products across categories
  const featuredProducts = products.filter(p => [1, 4, 8, 13, 16, 19, 21, 25].includes(p.id));

  return (
    <div className="bg-white">
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Featured Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-emerald-800 text-xs font-semibold tracking-widest uppercase">The Aura Collection</span>
            <h2 className="text-3xl font-serif font-bold text-stone-900 mt-1">Featured Essentials</h2>
            <p className="text-stone-500 text-sm font-light mt-2">Discover our top-rated pieces, designed to blend perfectly into your lifestyle.</p>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center gap-1.5 text-emerald-800 hover:text-emerald-950 font-semibold text-sm group"
          >
            <span>View All Products</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-stone-50 py-16 border-t border-stone-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-stone-400 text-xs font-bold uppercase tracking-widest">Our Philosophy</span>
          <h2 className="text-3xl font-serif text-stone-900">“True elegance is simplicity and high quality.”</h2>
          <p className="text-stone-500 text-sm md:text-base leading-relaxed font-light max-w-2xl mx-auto">
            We believe in creating products that last. From pure organic cotton linens to high-grade natural skincare formulations, every Aura item is carefully inspected to meet elite quality standards.
          </p>
          <div className="pt-2">
            <Link
              to="/products"
              className="inline-block bg-stone-900 hover:bg-emerald-800 text-white text-sm font-medium px-6 py-3 rounded-md transition duration-300 cursor-pointer"
            >
              Explore the Store
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


