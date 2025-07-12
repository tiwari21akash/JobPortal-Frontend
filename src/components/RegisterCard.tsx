import React, { useState } from "react";
import logo from "../assets/techjobcareer.png";
import { Link } from "react-router-dom";

const RegisterCard = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
  };

  return (
        <div className="flex items-center justify-center bg-gray-100 py-12 min-h-[calc(100vh-64px)]">
          <div className="bg-white rounded-3xl shadow-lg flex w-full max-w-4xl overflow-hidden">
            {/* Left Side */}
            <div className="hidden md:flex flex-col justify-center items-center bg-gray-900 text-white w-1/2 p-10 relative">
              <img src={logo} alt="TJC Logo" className="h-16 mb-6" />
              <h2 className="text-3xl font-bold mb-2">Welcome!</h2>
              <p className="mb-8 text-center">To join our community, please register with your personal info</p>
              <Link to="/login" className="border border-yellow-400 text-yellow-400 px-8 py-2 rounded-full font-semibold hover:bg-yellow-400 hover:text-gray-900 transition">SIGN IN</Link>
              <div className="absolute bottom-4 left-0 right-0 text-xs text-center opacity-60">
                <span>CREATOR HERE | DIRECTOR HERE</span>
              </div>
            </div>
            {/* Right Side */}
            <div className="flex-1 flex flex-col justify-center items-center p-8 md:p-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Register</h2>
              <p className="mb-6 text-gray-600">Create your account to get started</p>
              <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-5">
                <input
                  id="name"
                  type="text"
                  placeholder="Name..."
                  className="w-full px-5 py-3 rounded-full bg-gray-100 border border-gray-300 focus:ring-2 focus:ring-yellow-400 placeholder-gray-500"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required
                />
                <input
                  id="email"
                  type="email"
                  placeholder="Email..."
                  className="w-full px-5 py-3 rounded-full bg-gray-100 border border-gray-300 focus:ring-2 focus:ring-yellow-400 placeholder-gray-500"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
                <input
                  id="password"
                  type="password"
                  placeholder="Password..."
                  className="w-full px-5 py-3 rounded-full bg-gray-100 border border-gray-300 focus:ring-2 focus:ring-yellow-400 placeholder-gray-500"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                />
                <input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm Password..."
                  className="w-full px-5 py-3 rounded-full bg-gray-100 border border-gray-300 focus:ring-2 focus:ring-yellow-400 placeholder-gray-500"
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-yellow-400 text-gray-900 py-3 rounded-full font-semibold hover:bg-yellow-500 transition"
                >
                  REGISTER
                </button>
              </form>
              <div className="mt-6 text-gray-600 text-sm text-center">
                Already have an account?{' '}
                <Link to="/login" className="text-yellow-500 font-semibold hover:underline">sign in</Link>
              </div>
            </div>
          </div>
        </div>
  );
};

export default RegisterCard;
