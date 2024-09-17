import React from 'react';
import shazamLogo from '../assets/logo.svg'; // Use the Shazam logo you provided

function Login() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black">
      {/* Logo */}
      <img src={shazamLogo} alt="Shazam Logo" className="w-16 h-16 mb-6" />

      {/* Login Text */}
      <h1 className="text-white text-3xl font-bold mb-6">Login to your account</h1>

      {/* Login Form */}
      <form className="w-full max-w-sm">
        <div className="mb-4">
          <label className="block text-white mb-2" htmlFor="email">
            Email address
          </label>
          <input
            className="w-full bg-gray-800 text-white p-3 rounded"
            type="email"
            id="email"
            placeholder="name@domain.com"
          />
        </div>

        <div className="mb-6">
          <label className="block text-white mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="w-full bg-gray-800 text-white p-3 rounded"
            type="password"
            id="password"
            placeholder="Enter your password"
          />
        </div>

        {/* Login Button */}
        <button className="w-full bg-button-gradient text-white py-3 rounded font-bold">
          Login
        </button>

        <p className="mt-4 text-center text-white">
          Don't have an account? <a href="/signup" className="text-blue-500">Sign Up</a>
        </p>
      </form>

      {/* Or login with social buttons */}
    
    </div>
  );
}

export default Login;
