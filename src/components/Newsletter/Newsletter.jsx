import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the email to your newsletter service or perform other actions here
    console.log(`Subscribed with email: ${email}`);
    // Reset the input field
    setEmail('');
  };

  return (
    <section className="bg-gray-200 py-8">
      <div className="max-w-screen-lg mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-gray-600 mb-6">Stay updated with the latest recipes, cooking tips, and more!</p>
        <form onSubmit={handleSubmit}>
          <div className="flex items-center max-w-xs mx-auto">
            <input
              type="email"
              placeholder="Your email"
              className="flex-grow px-4 py-2 rounded-l-md focus:outline-none focus:ring focus:border-blue-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-r-md transition duration-300"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
