import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('user');
    return saved ? JSON.parse(saved) : null;
  });

  const [isGuest, setIsGuest] = useState(() => {
    return localStorage.getItem('isGuest') === 'true';
  });

  const login = (email, password) => {
    if (email === 'demo@example.com' && password === '123456') {
      const userData = { email, name: 'Demo User' };
      setUser(userData);
      setIsGuest(false);
      localStorage.setItem('user', JSON.stringify(userData));
      localStorage.setItem('isGuest', 'false');
      return { success: true };
    }
    return { success: false, message: 'Invalid credentials. Please use the demo credentials.' };
  };

  const loginAsGuest = () => {
    setUser(null);
    setIsGuest(true);
    localStorage.setItem('isGuest', 'true');
    localStorage.removeItem('user');
  };

  const logout = () => {
    setUser(null);
    setIsGuest(false);
    localStorage.removeItem('user');
    localStorage.setItem('isGuest', 'false');
  };

  return (
    <AuthContext.Provider value={{ user, isGuest, login, loginAsGuest, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
