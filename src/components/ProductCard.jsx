import React, { useState } from 'react';
import { Link } from 'react-router';
import { ShoppingCart, Eye, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="group relative bg-white border border-stone-100 rounded-lg overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col h-full">
      {/* Product Image Container */}
      <Link to={`/products/${product.id}`} className="block relative aspect-square md:aspect-[4/5] bg-stone-50 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
        />
        {/* Category Badge */}
        <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-[10px] uppercase tracking-wider font-bold text-stone-700 px-2.5 py-1 rounded-sm shadow-xs">
          {product.category}
        </span>
      </Link>

      {/* Content Details */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Category */}
        <span className="text-[10px] text-stone-400 font-bold mb-1 uppercase tracking-wider">
          {product.category}
        </span>
        {/* Product Name */}
        <Link to={`/products/${product.id}`} className="hover:text-emerald-800 transition duration-150 mb-1.5 block">
          <h3 className="font-serif font-semibold text-stone-800 text-base line-clamp-1">
            {product.name}
          </h3>
        </Link>
        {/* Description */}
        <p className="text-xs text-stone-500 line-clamp-2 leading-relaxed mb-4 flex-grow">
          {product.description}
        </p>
        
        {/* Price & Actions */}
        <div className="mt-auto space-y-3">
          <div className="flex items-baseline justify-between">
            <span className="text-lg font-bold text-stone-900 font-mono">
              ${product.price.toFixed(2)}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-1">
            <Link
              to={`/products/${product.id}`}
              className="flex items-center justify-center gap-1.5 border border-stone-200 hover:border-stone-800 text-stone-700 hover:text-stone-950 text-xs font-semibold py-2.5 px-2 rounded-md transition duration-200 cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Details</span>
            </Link>
            <button
              onClick={handleAddToCart}
              disabled={added}
              className={`flex items-center justify-center gap-1.5 text-white text-xs font-semibold py-2.5 px-2 rounded-md transition-all duration-300 cursor-pointer ${
                added 
                  ? 'bg-emerald-700 hover:bg-emerald-800' 
                  : 'bg-stone-900 hover:bg-emerald-800'
              }`}
            >
              {added ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Added!</span>
                </>
              ) : (
                <>
                  <ShoppingCart className="w-3.5 h-3.5" />
                  <span>Add to Cart</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
