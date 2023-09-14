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
            Email: <a href="mailto:info@example.com" className="text-gray-400 hover:text-white transition duration-300">info@example.com</a>
          </p>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-2xl font-semibold">Newsletter</h3>
          <p className="mt-4">
            Subscribe to our newsletter for updates on new recipes and more.
          </p>
          {/* Add your newsletter signup form here */}
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4 text-center">
        <p>&copy; {new Date().getFullYear()} Your Food Recipe Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
