import React from 'react';
import shazamLogo from '../assets/logo.svg'; // Use the Shazam logo you provided

function SignUp() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black">
      {/* Logo */}
      <img src={shazamLogo} alt="Shazam Logo" className="w-16 h-16 mb-6" />

      {/* Sign Up Text */}
      <h1 className="text-white text-3xl font-bold mb-6">Sign up to start listening</h1>

      {/* Sign-Up Form */}
      <form className="w-full max-w-sm">
        <div className="mb-4">
          <label className="block text-white mb-2" htmlFor="username">
            Username
          </label>
          <input
            className="w-full bg-gray-800 text-white p-3 rounded"
            type="text"
            id="username"
            placeholder="Enter your username"
          />
        </div>

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

        {/* Sign-Up Button */}
        <button className="w-full bg-button-gradient text-white py-3 rounded font-bold">
          Sign Up
        </button>

        <p className="mt-4 text-center text-white">
          Already have an account? <a href="/login" className="text-blue-500">Login</a>
        </p>
      </form>

      
    </div>
  );
}

export default SignUp;
