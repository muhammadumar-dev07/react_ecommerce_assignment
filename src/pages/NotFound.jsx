import React from 'react';
import { Link } from 'react-router';
import { AlertCircle, Home, ShoppingBag } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-white px-4">
      <div className="text-center max-w-md space-y-6">
        <div className="w-20 h-20 bg-stone-100 rounded-full flex items-center justify-center mx-auto text-stone-700">
          <AlertCircle className="w-10 h-10 text-stone-500" />
        </div>
        
        <div className="space-y-2">
          <h1 className="text-5xl font-serif font-extrabold text-stone-900">404</h1>
          <h2 className="text-xl font-serif font-semibold text-stone-800">Page Not Found</h2>
          <p className="text-stone-500 text-sm font-light leading-relaxed">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-3 pt-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-emerald-800 text-white text-xs font-semibold px-6 py-3 rounded-md transition duration-200"
          >
            <Home className="w-4 h-4" />
            <span>Go to Home</span>
          </Link>
          <Link
            to="/products"
            className="inline-flex items-center justify-center gap-2 border border-stone-300 hover:border-stone-800 text-stone-700 text-xs font-semibold px-6 py-3 rounded-md transition duration-200"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Browse Products</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
