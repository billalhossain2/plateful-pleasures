import React from 'react';
import PropTypes from 'prop-types';
const Testimonials = ({ reviews }) => {
  return (
    <section className="py-8">
      <div className="max-w-screen-lg mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">User Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews.map((review, index) => (
            <div key={index} className="p-6 rounded-lg shadow-md border-[1px] border-solid border-gray-400">
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

Testimonials.propTypes = {
  reviews:PropTypes.array.isRequired
}

export default Testimonials;
