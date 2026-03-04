import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail } from 'lucide-react';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Front-end only mockup: Bypass real authentication.
    if (email && password) {
       navigate('/admin');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
        <div className="text-center mb-8">
          <div className="inline-block p-1 rounded-full bg-white border-2 border-accent mb-4">
            <img src="/gtu_logo.png" alt="GTU Logo" className="w-16 h-16 object-contain" />
          </div>
          <h2 className="text-2xl font-bold text-primary font-serif">Admin Portal</h2>
          <p className="text-sm text-slate-500 mt-2">Sign in to manage library website content</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-primary mb-2">Email Address</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail size={18} className="text-slate-400" />
              </div>
              <input
                type="email"
                required
                className="block w-full pl-10 pr-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:ring-accent focus:border-accent"
                placeholder="admin@gtu.edu.in"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-primary mb-2">Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock size={18} className="text-slate-400" />
              </div>
              <input
                type="password"
                required
                className="block w-full pl-10 pr-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:ring-accent focus:border-accent"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center text-slate-600">
              <input type="checkbox" className="mr-2 rounded text-primary focus:ring-primary" />
              Remember me
            </label>
            <a href="#" className="text-primary hover:text-accent font-semibold transition-colors">Forgot Password?</a>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-primary bg-accent hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent transition-all duration-200 uppercase tracking-widest"
          >
            Sign In
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-slate-100 text-center">
          <p className="text-xs text-slate-400">
            For technical support, contact the IT Department.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
