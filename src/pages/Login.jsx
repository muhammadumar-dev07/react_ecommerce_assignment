import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router';
import { User, Lock, ArrowRight, ShieldCheck } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login, loginAsGuest } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const res = login(email, password);
    if (res.success) navigate('/');
    else setError(res.message);
  };

  const handleGuest = () => {
    loginAsGuest();
    navigate('/');
  };

  const autofillDemo = () => {
    setEmail('demo@example.com');
    setPassword('123456');
    setError('');
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-stone-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-xs border border-stone-100 space-y-6">
        <div className="text-center space-y-2">
          <Link to="/" className="inline-block font-serif font-bold text-2xl text-stone-900">AURA<span className="text-emerald-800">.</span></Link>
          <h2 className="text-xl font-serif font-bold text-stone-800">Welcome Back</h2>
          <p className="text-stone-500 text-xs">Sign in to your account or continue as guest</p>
        </div>

        <div className="bg-emerald-50/70 border border-emerald-200/80 p-3.5 rounded-lg text-xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-emerald-900 flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-emerald-700" /> Demo Credentials:
            </span>
            <button type="button" onClick={autofillDemo} className="text-emerald-800 font-semibold underline hover:text-emerald-950 cursor-pointer">
              Autofill
            </button>
          </div>
          <div className="text-emerald-800 font-mono space-y-0.5">
            <p>Email: <span className="font-bold">demo@example.com</span></p>
            <p>Password: <span className="font-bold">123456</span></p>
          </div>
        </div>

        {error && <div className="bg-rose-50 border border-rose-200 text-rose-700 text-xs p-3 rounded-md">{error}</div>}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs uppercase font-semibold text-stone-600 mb-1">Email Address</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="demo@example.com"
                className="w-full bg-stone-50 text-stone-800 text-xs pl-9 pr-4 py-3 rounded-md border border-stone-200 focus:outline-none focus:border-emerald-800"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase font-semibold text-stone-600 mb-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="123456"
                className="w-full bg-stone-50 text-stone-800 text-xs pl-9 pr-4 py-3 rounded-md border border-stone-200 focus:outline-none focus:border-emerald-800"
              />
            </div>
          </div>

          <button type="submit" className="w-full bg-stone-900 hover:bg-emerald-800 text-white font-semibold py-3 rounded-md text-xs transition duration-200 cursor-pointer">
            Sign In
          </button>
        </form>

        <div className="relative flex py-2 items-center">
          <div className="flex-grow border-t border-stone-200"></div>
          <span className="flex-shrink mx-4 text-stone-400 text-[10px] uppercase tracking-wider">Or</span>
          <div className="flex-grow border-t border-stone-200"></div>
        </div>

        <button
          type="button"
          onClick={handleGuest}
          className="w-full border border-stone-300 hover:border-stone-800 text-stone-700 font-semibold py-3 rounded-md text-xs transition duration-200 cursor-pointer flex items-center justify-center gap-1.5"
        >
          <span>Continue as Guest</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        <div className="text-center pt-2">
          <Link to="/" className="text-xs text-stone-500 hover:text-stone-800 underline">
            &larr; Back to Store
          </Link>
        </div>
      </div>
    </div>
  );
}
