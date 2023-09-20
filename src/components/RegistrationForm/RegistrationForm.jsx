import React, { useContext, useState } from 'react';
import Navbar from '../shared/Navbar';
import { Link, NavLink } from 'react-router-dom';
import useTitle from '../Hooks/useTitle';
import Footer from '../shared/Footer';
import { userContext } from '../../Contexts/UserContext';

function RegistrationForm() {
  useTitle('Registration')
  const {registerWithEmailPassword} = useContext(userContext)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    photoUrl: '',
    agreeToTerms: false, // Added agreeToTerms field
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setError("")
    setSuccess("")

    // Validate password match
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    //password: 1234aI#

    //Validate password with regular expression
    if(!(/[a-z]/).test(formData.password)){
      return setError('Your password should contain atleast one lower case letter.')
    }else if(!(/[A-Z]/).test(formData.password)){
      return setError('Your password should contain atleast one upper case letter.')
    }else if(!(/[0-9]/).test(formData.password)){
      return setError('Your password should contain atleast one number.')
    }else if(!(/[!@#$%^&*]/).test(formData.password)){
      return setError('Your password should contain atleast one special character.')
    }else if(formData.password.length < 6){
      return setError('Your password must be at least 6 characters longer.')
    }

    // Check if the user has agreed to terms and conditions
    if (!formData.agreeToTerms) {
      alert('Please agree to the terms and conditions');
      return;
    }

    //Create a new account with firebase
    registerWithEmailPassword(formData.email, formData.password)
    .then(()=>setSuccess("Successfully created a new user"))
    .catch((error)=>setError("Failed to create a new user: ", error.message))

    // Reset the form after submission
    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      photoUrl: '',
      agreeToTerms: false,
    });
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
              type="text"
              id="photoUrl"
              name="photoUrl"
              onChange={handleChange}
              value={formData.photoUrl}
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
              className="bg-[#5F8D0A] text-white font-bold py-2 px-4 rounded hover:bg-[#5F8D0A]"
            >
              Register
            </button>
          </div>
          <p className='font-bold text-center text-red-500'>{error}</p>
          <p className='font-bold text-center text-green-500'>{success}</p>
          <p>Do you have an account? <Link to="/login">Login</Link></p>
        </form>
      </div>
    </div>
    <Footer></Footer>
    </>
  );
}

export default RegistrationForm;
