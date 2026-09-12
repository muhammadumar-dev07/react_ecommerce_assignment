import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { ShoppingCart, ArrowLeft, Shield, Truck, RotateCcw, Check } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <div className="bg-stone-50 border rounded-lg py-16 px-4 max-w-lg mx-auto">
          <h2 className="text-2xl font-serif font-bold text-stone-900">Product Not Found</h2>
          <p className="text-stone-500 text-sm mt-2">The product with ID "{id}" does not exist.</p>
          <div className="mt-8 flex justify-center gap-4">
            <button onClick={() => navigate('/products')} className="bg-stone-900 hover:bg-emerald-800 text-white text-xs font-semibold px-6 py-3 rounded-md cursor-pointer">Browse Catalog</button>
            <button onClick={() => navigate('/')} className="border text-stone-700 text-xs font-semibold px-6 py-3 rounded-md cursor-pointer">Go Home</button>
          </div>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <button onClick={() => navigate(-1)} className="inline-flex items-center gap-2 text-xs font-semibold text-stone-600 hover:text-stone-900 mb-8 cursor-pointer">
          <ArrowLeft className="w-4 h-4" /> <span>Back to products</span>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="aspect-[4/5] bg-stone-50 rounded-lg overflow-hidden border border-stone-100">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover object-center" />
          </div>

          <div className="space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-emerald-800 font-bold">{product.category}</span>
              <h1 className="text-3xl font-serif font-bold text-stone-900 mt-1">{product.name}</h1>
              <p className="text-2xl font-bold text-stone-900 mt-3">${product.price.toFixed(2)}</p>
            </div>

            <div className="border-y border-stone-100 py-6">
              <h3 className="text-xs uppercase tracking-wider font-bold text-stone-400 mb-2">Description</h3>
              <p className="text-stone-600 text-sm leading-relaxed font-light">{product.description}</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center border border-stone-300 rounded-md">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-3.5 py-2 text-stone-600 hover:text-stone-900 cursor-pointer">-</button>
                <span className="px-3 text-sm font-semibold text-stone-800 select-none">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="px-3.5 py-2 text-stone-600 hover:text-stone-900 cursor-pointer">+</button>
              </div>

              <button
                onClick={handleAddToCart}
                disabled={added}
                className={`flex-grow flex items-center justify-center gap-2 text-white font-semibold py-3 px-6 rounded-md transition-all duration-300 cursor-pointer ${
                  added ? 'bg-emerald-700' : 'bg-stone-900 hover:bg-emerald-800'
                }`}
              >
                {added ? <><Check className="w-5 h-5" /> <span>Added!</span></> : <><ShoppingCart className="w-5 h-5" /> <span>Add to Cart — ${(product.price * qty).toFixed(2)}</span></>}
              </button>
            </div>

            <div className="grid grid-cols-3 gap-2 pt-6 border-t border-stone-100 text-stone-500 text-[11px] font-light">
              <div className="flex items-center gap-1"><Truck className="w-3.5 h-3.5 text-emerald-700" /> <span>Free Shipping</span></div>
              <div className="flex items-center gap-1"><RotateCcw className="w-3.5 h-3.5 text-emerald-700" /> <span>30-Day Returns</span></div>
              <div className="flex items-center gap-1"><Shield className="w-3.5 h-3.5 text-emerald-700" /> <span>Secure Pay</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
