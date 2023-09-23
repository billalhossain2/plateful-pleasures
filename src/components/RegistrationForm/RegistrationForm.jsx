import React, { useContext, useEffect, useState } from "react";
import Navbar from "../shared/Navbar";
import { Link, NavLink } from "react-router-dom";
import useTitle from "../Hooks/useTitle";
import Footer from "../shared/Footer";
import { userContext } from "../../Contexts/UserContext";


function RegistrationForm() {
  useTitle("Registration");
  const { registerWithEmailPassword, addExtraUserInfo, addPhotoToFirestore  } = useContext(userContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    const photoUrl = form.photoUrl.value;
    const agreeToTerms = form.agreeToTerms.checked;

    setError("");
    setSuccess("");

    // Validate password match
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    //password: billal.Hossain*76

    //Validate password with regular expression
    if (!/[a-z]/.test(password)) {
      return setError(
        "Your password should contain atleast one lower case letter."
      );
    } else if (!/[A-Z]/.test(password)) {
      return setError(
        "Your password should contain atleast one upper case letter."
      );
    } else if (!/[0-9]/.test(password)) {
      return setError("Your password should contain atleast one number.");
    } else if (!/[!@#$%^&*]/.test(password)) {
      return setError(
        "Your password should contain atleast one special character."
      );
    } else if (password.length < 6) {
      return setError("Your password must be at least 6 characters longer.");
    }

    // Check if the user has agreed to terms and conditions
    if (!agreeToTerms) {
      setError("Please agree to terms and condition")
      return;
    }

    //Create a new account with firebase
    registerWithEmailPassword(email, password)
      .then(() => {
        setSuccess("Successfully created a new user");
        addExtraUserInfo({
          displayName: name, photoURL: photoUrl
        })
        .then(()=>{
          console.log("Successfully updated user profile")
        })
        .catch(error => console.log("Something went wrong=====> ", error.message))
      })
      .catch((error) =>
        setError("Failed to create a new user: ", error.message)
      );
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="min-h-screen flex items-center justify-center">
        <div className="p-8 rounded shadow-md w-96 border-[1px] border-solid border-gray-300">
          <h2 className="text-2xl font-bold mb-4">Registration Page</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-bold">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border border-gray-300 rounded px-3 py-2"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-bold">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
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
                name="password"
                className="w-full border border-gray-300 rounded px-3 py-2"
                required
              />
            </div>
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-gray-700 font-bold"
              >
                Confirm Password:
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="w-full border border-gray-300 rounded px-3 py-2"
                required
              />
            </div>
            <div>
              <label
                htmlFor="photoUrl"
                className="block text-gray-700 font-bold"
              >
                Profile Photo:
              </label>
              <input
                type="text"
                id="photoUrl"
                name="photoUrl"
                className="w-full border border-gray-300 rounded px-3 py-2"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-bold">
                <input type="checkbox" name="agreeToTerms" className="mr-2" />I
                agree to the{" "}
                <NavLink to="/terms-and-conditions">
                  Terms and Conditions
                </NavLink>
              </label>
            </div>
            <div>
              <button
                type="submit"
                className="bg-[#5F8D0A] text-white font-bold py-2 px-4 rounded hover:bg-[#5F8D0A]"
              >
                Register
              </button>
            </div>
            <p className="font-bold text-center text-red-500">{error}</p>
            <p className="font-bold text-center text-green-500">{success}</p>
            <p>
              Do you have an account? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default RegistrationForm;
