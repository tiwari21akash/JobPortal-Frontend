import React, { useState } from "react";
import logo from "../assets/techjobcareer.png";
import { Link } from "react-router-dom";

const LoginCard = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 py-12 min-h-[calc(100vh-64px)]">
        <div className="bg-white rounded-3xl shadow-lg flex w-full max-w-4xl overflow-hidden">
        {/* Left Side */}
        <div className="hidden md:flex flex-col justify-center items-center bg-[#192235] text-white w-1/2 p-10 relative">
          <img src={logo} alt="TJC Logo" className="h-16 mb-6" />
          <h2 className="text-3xl font-bold mb-2">Welcome Back!</h2>
          <p className="mb-8 text-center">To stay connected with us please login with your personal info</p>
          <Link to="/register" className="border border-yellow-400 text-yellow-400 px-8 py-2 rounded-full font-semibold hover:bg-yellow-400 hover:text-[#192235] transition">SIGN UP</Link>
          <div className="absolute bottom-4 left-0 right-0 text-xs text-center opacity-60">
            <span>CREATOR HERE | DIRECTOR HERE</span>
          </div>
        </div>
        {/* Right Side */}
        <div className="flex-1 flex flex-col justify-center items-center p-8 md:p-16">
          <h2 className="text-3xl font-bold text-[#192235] mb-2">Welcome</h2>
          <p className="mb-6 text-gray-600">Login in to your account to continue</p>
          <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-5">
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
            <div className="flex justify-end text-sm mb-2">
              <button type="button" className="text-yellow-500 hover:underline">Forgot your password?</button>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-400 text-[#192235] py-3 rounded-full font-semibold hover:bg-yellow-500 transition"
            >
              LOG IN
            </button>
          </form>
          <div className="mt-6 text-gray-600 text-sm text-center">
            Don't have an account?{' '}
            <Link to="/register" className="text-yellow-500 font-semibold hover:underline">sign up</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginCard;
