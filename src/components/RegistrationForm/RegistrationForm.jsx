import React, { useState } from 'react';
import Navbar from '../shared/Navbar';
import { Link, NavLink } from 'react-router-dom';
import useTitle from '../Hooks/useTitle';
import Footer from '../shared/Footer';

function RegistrationForm() {
  useTitle('Registration')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    photoUrl: null,
    agreeToTerms: false, // Added agreeToTerms field
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      photoUrl: e.target.files[0], // Use the first selected file
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate password match
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // Check if the user has agreed to terms and conditions
    if (!formData.agreeToTerms) {
      alert('Please agree to the terms and conditions');
      return;
    }

    // Send the formData to your server for processing
    // You can use fetch or axios to make a POST request here
    // Example: fetch('/api/register', { method: 'POST', body: formData })

    // Reset the form after submission
    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      photoUrl: null,
      agreeToTerms: false,
    });
  };

  return (
    <>
    <Navbar></Navbar>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
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
              value={formData.name}
              onChange={handleChange}
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
              value={formData.email}
              onChange={handleChange}
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
              name="password"
              value={formData.password}
              onChange={handleChange}
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
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>
          <div>
            <label htmlFor="photoUrl" className="block text-gray-700 font-bold">
              Photo URL:
            </label>
            <input
              type="file"
              id="photoUrl"
              name="photoUrl"
              onChange={handleFileChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                className="mr-2"
              />
              I agree to the <NavLink to="/terms-and-conditions">Terms and Conditions</NavLink>
            </label>
          </div>
          <div>
            <button
              type="submit"
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
            >
              Register
            </button>
          </div>
          <p>Do you have an account? <Link to="/login">Login</Link></p>
        </form>
      </div>
    </div>
    <Footer></Footer>
    </>
  );
}

export default RegistrationForm;
