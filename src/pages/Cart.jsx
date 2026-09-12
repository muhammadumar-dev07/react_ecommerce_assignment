import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Trash2, ShoppingBag, ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, clearCart, getTotalItems, getTotalPrice } = useCart();
  const navigate = useNavigate();
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <div className="bg-emerald-50 border rounded-lg py-16 px-6 max-w-lg mx-auto space-y-4">
          <CheckCircle2 className="w-16 h-16 text-emerald-800 mx-auto" />
          <h2 className="text-3xl font-serif font-bold">Order Confirmed!</h2>
          <p className="text-stone-600 text-sm">Thank you for shopping with Aura. Transaction successful.</p>
          <button onClick={() => navigate('/products')} className="bg-stone-900 text-white text-xs font-semibold px-6 py-3 rounded-md cursor-pointer">Continue Shopping</button>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <div className="bg-stone-50 border rounded-lg py-16 px-4 max-w-md mx-auto">
          <ShoppingBag className="w-12 h-12 text-stone-300 mx-auto mb-4" />
          <h2 className="text-xl font-serif font-bold text-stone-800">Your Cart is Empty</h2>
          <button onClick={() => navigate('/products')} className="mt-6 bg-stone-900 text-white text-xs font-semibold px-6 py-3 rounded-md cursor-pointer">Explore Store</button>
        </div>
      </div>
    );
  }

  const subtotal = getTotalPrice();
  const shipping = subtotal > 150 ? 0 : 15;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-serif font-bold mb-8">Shopping Cart ({getTotalItems()})</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => (
            <div key={item.product.id} className="flex items-center justify-between py-4 border-b gap-4">
              <div className="flex items-center gap-4">
                <img src={item.product.image} alt={item.product.name} className="w-16 h-20 object-cover rounded-md border" />
                <div>
                  <h3 className="font-serif font-semibold text-stone-800">{item.product.name}</h3>
                  <p className="text-xs text-stone-400">${item.product.price.toFixed(2)}</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex items-center border rounded">
                  <button onClick={() => updateQuantity(item.product.id, -1)} className="px-2 py-1 text-sm cursor-pointer">-</button>
                  <span className="px-2 text-xs font-mono">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.product.id, 1)} className="px-2 py-1 text-sm cursor-pointer">+</button>
                </div>
                <span className="font-semibold font-mono text-sm">${(item.product.price * item.quantity).toFixed(2)}</span>
                <button onClick={() => removeFromCart(item.product.id)} className="text-stone-400 hover:text-rose-600 cursor-pointer"><Trash2 className="w-4 h-4" /></button>
              </div>
            </div>
          ))}
          <div className="flex justify-between pt-4">
            <button onClick={() => navigate('/products')} className="text-xs text-emerald-800 font-semibold flex items-center gap-1 cursor-pointer"><ArrowLeft className="w-3.5 h-3.5" /> Continue Shopping</button>
            <button onClick={clearCart} className="text-xs text-rose-600 font-semibold flex items-center gap-1 cursor-pointer"><Trash2 className="w-3.5 h-3.5" /> Clear Cart</button>
          </div>
        </div>

        <div className="bg-stone-50 p-6 rounded-lg border space-y-6 h-fit">
          <h3 className="font-serif font-bold text-lg border-b pb-3">Summary</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between"><span>Subtotal</span><span className="font-mono">${subtotal.toFixed(2)}</span></div>
            <div className="flex justify-between"><span>Shipping</span><span className="font-mono">{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span></div>
          </div>
          <div className="border-t pt-4 flex justify-between font-bold text-base">
            <span>Total</span><span className="font-mono text-emerald-800">${(subtotal + shipping).toFixed(2)}</span>
          </div>
          <button onClick={() => { setDone(true); clearCart(); }} className="w-full bg-stone-900 hover:bg-emerald-800 text-white font-semibold py-3 rounded-md cursor-pointer flex items-center justify-center gap-2">
            <span>Checkout</span> <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
