import React, { useContext, useState } from "react";
import Navbar from "../shared/Navbar";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import useTitle from "../Hooks/useTitle";
import Footer from "../shared/Footer";
import { userContext } from "../../Contexts/UserContext";

function LoginForm() {
  useTitle("Login");
  const { user, signInUserWithGoogle, signInUserWithFacebook } =
    useContext(userContext);
  const from = useLocation()?.state?.from;
  const navigate = useNavigate();
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  
  const handleFacebookLogin = () => {
    signInUserWithFacebook()
      .then(() => {
        setSuccess("Successfully logged in with facebook");
        navigate(from);
      })
      .catch((error) => setError(error.message));
  };

  const handleGoogleLogin = () => {
    setSuccess("");
    setError("");
    signInUserWithGoogle()
      .then((userCredential) => {
        setSuccess("Login successful");
        navigate(from);
      })
      .catch((error) => setError(error.message));
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="min-h-screen flex items-center justify-center">
        <div className="p-8 rounded shadow-md w-96 border-[1px] border-solid border-gray-300">
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
              <label
                htmlFor="password"
                className="block text-gray-700 font-bold"
              >
                Password:
              </label>
              <input
                type="password"
                id="password"
                className="w-full border border-gray-300 rounded px-3 py-2"
                required
              />
            </div>
            <p>
              Forgot Password? <a href="">Reset</a>
            </p>
            <div>
              <button
                type="submit"
                className="bg-[#5F8D0A] text-white font-bold py-2 px-4 rounded hover:bg-[#5F8D0A] mb-3 w-[100%]"
              >
                Login
              </button>
              <p>
                Are you new to this site?{" "}
                <NavLink to="/register">Register</NavLink>
              </p>
              <div className="text-red-500 font-bold text-center my-3">
                {error}
              </div>
              <div className="text-green-500 font-bold text-center my-3">
                {success}
              </div>
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
      <Footer></Footer>
    </>
  );
}

export default LoginForm;
