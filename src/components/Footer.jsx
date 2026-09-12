import React from 'react';
import { Link } from 'react-router';
import { Globe, Share2, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-8 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Info Column */}
        <div className="space-y-4">
          <Link to="/" className="flex items-center gap-2 text-white">
            <img src="/logo.svg" alt="Aura Logo" className="w-8 h-8 filter brightness-200" />
            <span className="font-serif font-bold text-xl tracking-wider">AURA.</span>
          </Link>
          <p className="text-sm text-stone-400 leading-relaxed font-light">
            Elevating your everyday with curated essentials, luxury organic treatments, and conscious craftsmanship. Crafted for the modern individual.
          </p>
          <div className="flex space-x-4 pt-2">
            <a href="#" className="hover:text-emerald-500 transition-colors" title="Website"><Globe className="w-5 h-5" /></a>
            <a href="#" className="hover:text-emerald-500 transition-colors" title="Social"><Share2 className="w-5 h-5" /></a>
            <a href="#" className="hover:text-emerald-500 transition-colors" title="Contact"><Mail className="w-5 h-5" /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
          <ul className="space-y-2.5 text-sm font-light">
            <li><Link to="/" className="hover:text-emerald-500 transition-colors">Home</Link></li>
            <li><Link to="/products" className="hover:text-emerald-500 transition-colors">All Products</Link></li>
            <li><Link to="/cart" className="hover:text-emerald-500 transition-colors">Shopping Cart</Link></li>
            <li><Link to="/login" className="hover:text-emerald-500 transition-colors">Login / Access</Link></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Categories</h4>
          <ul className="space-y-2.5 text-sm font-light">
            <li><Link to="/products?category=Clothing" className="hover:text-emerald-500 transition-colors">Clothing</Link></li>
            <li><Link to="/products?category=Footwear" className="hover:text-emerald-500 transition-colors">Footwear</Link></li>
            <li><Link to="/products?category=Accessories" className="hover:text-emerald-500 transition-colors">Accessories</Link></li>
            <li><Link to="/products?category=Beauty" className="hover:text-emerald-500 transition-colors">Beauty & Wellness</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-3.5 text-sm font-light">
          <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Contact Us</h4>
          <div className="flex items-start gap-2.5">
            <MapPin className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
            <span className="text-stone-400">123 Style Boulevard, New York, NY 10001</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Phone className="w-4 h-4 text-emerald-500 flex-shrink-0" />
            <span className="text-stone-400">+1 (555) 019-2834</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Mail className="w-4 h-4 text-emerald-500 flex-shrink-0" />
            <span className="text-stone-400">support@auraretail.com</span>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-stone-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-500 font-light">
        <p>&copy; {new Date().getFullYear()} Aura Retail Inc. All rights reserved.</p>
        <p>Built with React, Vite & Tailwind CSS.</p>
      </div>
    </footer>
  );
}

