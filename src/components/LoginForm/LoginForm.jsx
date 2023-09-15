import React from 'react';
import Navbar from '../shared/Navbar';
import { Link } from 'react-router-dom';

function LoginForm() {
  const handleFacebookLogin = () => {
    // Implement Facebook login logic using the Facebook SDK or API.
    // You should handle user authentication and authorization here.
  };

  const handleGoogleLogin = () => {
    // Implement Google login logic using the Google SDK or API.
    // You should handle user authentication and authorization here.
  };

  return (
    <>
    <Navbar></Navbar>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-700 font-bold">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700 font-bold">
              Password:
            </label>
            <input
              type="password"
              id="password"
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>
          <p>Forgot Password? <a href="">Reset</a></p>
          <div>
            <button
              type="submit"
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 mb-3 w-[100%]"
            >
              Login
            </button>
            <p>Are you new to this site? <Link to="/register">Register</Link></p>
            <div className="flex flex-col space-y-3 mt-10">
              {/* Facebook Login Button */}
              <button
                onClick={handleFacebookLogin}
                className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
              >
                Login with Facebook
              </button>
              {/* Google Login Button */}
              <button
                onClick={handleGoogleLogin}
                className="bg-red-600 text-white font-bold py-2 px-4 rounded hover:bg-red-700"
              >
                Login with Google
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}

export default LoginForm;
