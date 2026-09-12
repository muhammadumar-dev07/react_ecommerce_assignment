import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import { ShoppingCart, User, LogOut, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { getTotalItems } = useCart();
  const { user, isGuest, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => { logout(); navigate('/login'); };
  const linkClass = ({ isActive }) =>
    `font-medium text-sm transition-colors ${isActive ? 'text-emerald-800 font-semibold' : 'text-stone-600 hover:text-stone-900'}`;

  const cartCount = getTotalItems();

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.svg" alt="Logo" className="w-8 h-8" />
            <span className="font-serif font-bold text-xl text-stone-900">AURA.</span>
          </Link>

          <div className="hidden md:flex space-x-6 items-center">
            <NavLink to="/" end className={linkClass}>Home</NavLink>
            <NavLink to="/products" className={linkClass}>Shop</NavLink>
            <Link to="/products?category=Clothing" className="text-sm text-stone-600 hover:text-stone-900">Clothing</Link>
            <Link to="/products?category=Footwear" className="text-sm text-stone-600 hover:text-stone-900">Footwear</Link>
            <Link to="/products?category=Accessories" className="text-sm text-stone-600 hover:text-stone-900">Accessories</Link>
            <Link to="/products?category=Beauty" className="text-sm text-stone-600 hover:text-stone-900">Beauty</Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/cart" className="relative p-2 text-stone-600 hover:text-emerald-800">
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-emerald-700 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center border border-white">
                  {cartCount}
                </span>
              )}
            </Link>

            <div className="hidden md:flex items-center space-x-3 border-l border-stone-200 pl-4">
              {user ? (
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-stone-800">{user.name}</span>
                  <button onClick={handleLogout} className="p-1.5 rounded-full text-stone-500 hover:text-rose-600 cursor-pointer">
                    <LogOut className="w-4 h-4" />
                  </button>
                </div>
              ) : isGuest ? (
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-stone-500">Guest</span>
                  <Link to="/login" className="text-xs text-emerald-800 underline">Sign In</Link>
                </div>
              ) : (
                <Link to="/login" className="bg-stone-900 hover:bg-emerald-800 text-white text-xs px-4 py-2 rounded-md">
                  Login
                </Link>
              )}
            </div>

            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 text-stone-600 cursor-pointer">
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-b px-4 py-4 space-y-3">
          <Link to="/" onClick={() => setMenuOpen(false)} className="block text-stone-600 font-medium py-1">Home</Link>
          <Link to="/products" onClick={() => setMenuOpen(false)} className="block text-stone-600 font-medium py-1">Shop</Link>
          <div className="border-t border-stone-100 pt-2">
            <div className="grid grid-cols-2 gap-2 mt-1">
              <Link to="/products?category=Clothing" onClick={() => setMenuOpen(false)} className="text-sm text-stone-600">Clothing</Link>
              <Link to="/products?category=Footwear" onClick={() => setMenuOpen(false)} className="text-sm text-stone-600">Footwear</Link>
              <Link to="/products?category=Accessories" onClick={() => setMenuOpen(false)} className="text-sm text-stone-600">Accessories</Link>
              <Link to="/products?category=Beauty" onClick={() => setMenuOpen(false)} className="text-sm text-stone-600">Beauty</Link>
            </div>
          </div>
          <div className="border-t border-stone-100 pt-3">
            {user ? (
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-stone-800">{user.name}</span>
                <button onClick={() => { handleLogout(); setMenuOpen(false); }} className="text-xs text-rose-600 font-semibold">Logout</button>
              </div>
            ) : isGuest ? (
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-stone-600">Guest</span>
                <Link to="/login" onClick={() => setMenuOpen(false)} className="text-xs text-emerald-800 underline">Sign In</Link>
              </div>
            ) : (
              <Link to="/login" onClick={() => setMenuOpen(false)} className="block text-center bg-stone-900 text-white py-2 rounded-md text-sm font-semibold">Login</Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
