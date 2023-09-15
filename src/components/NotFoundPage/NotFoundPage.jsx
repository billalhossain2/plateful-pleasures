import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      {/* Image */}
      <img
        src="https://i.ibb.co/pK6kNCJ/not-found-page.png"  // Replace with the actual path to your image
        alt="404 Illustration"
        className="w-64 h-64 mb-4"
      />
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="text-2xl text-gray-600">Page not found</p>
        <p className="mt-4">
          <Link
            to="/"
            className="text-blue-500 hover:underline"
          >
            Go back to home
          </Link>
        </p>
      </div>
    </div>
  );
}

export default NotFoundPage;
