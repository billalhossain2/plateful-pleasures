import React from 'react';

const Testimonials = ({ reviews }) => {
  return (
    <section className="bg-gray-100 py-8">
      <div className="max-w-screen-lg mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">User Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 mb-4">{review.text}</p>
              <p className="text-gray-600 font-semibold">{`Author: ${review.author}`}</p>
              <p className="text-gray-500">{review.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
