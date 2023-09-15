import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-screen-lg mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <h3 className="text-2xl font-semibold">Connect with Us</h3>
          <p className="mt-4">Follow us on social media for the latest updates:</p>
          <div className="mt-4">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300 mr-4"
            >
              Facebook
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300 mr-4"
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              Instagram
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <h3 className="text-2xl font-semibold">Contact Information</h3>
          <p className="mt-4">
            Feel free to contact us if you have any questions or suggestions.
          </p>
          <p className="mt-4">
            Email: <a href="mailto:info@example.com" className="text-gray-400 hover:text-white transition duration-300">siam.ahmed76@gmail.com</a>
          </p>
          <p className="mt-4">
            <span>Phone:</span> <span className="text-gray-400 hover:text-white transition duration-300">01311123533</span>
          </p>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-2xl font-semibold">Newsletter</h3>
          <p className="mt-4">
            Subscribe to our newsletter for updates on new recipes and more.
          </p>
          <form className='mt-3'>
          <div className="flex lg:flex-row md:flex-row flex-col">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded-l-md focus:outline-none focus:ring focus:border-blue-300 text-black"
              required
            />
            <button
              type="submit"
              className="bg-[#5F8D0A] hover:bg-[#298d0a] text-white font-semibold py-2 px-4 rounded-r-md transition duration-300"
            >
              Subscribe
            </button>
          </div>
        </form>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4 text-center">
        <p>&copy; {new Date().getFullYear()} Your Food Recipe Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
