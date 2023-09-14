import React from 'react';
import Testimonials from '../Testimonials/Testimonials';

const reviews = [
  {
    text: 'These recipes are amazing! I never thought I could cook such delicious meals.',
    author: 'Sabbir Rahman',
    date: 'September 12, 2023',
  },
  {
    text: 'This website has revolutionized my cooking. I can\'t thank you enough!',
    author: 'Shofikul Islam',
    date: 'September 10, 2023',
  },
  {
    text: 'The recepes of this website is really very tasty and effordable. So, I am highly recommending their service.',
    author: 'Siam Ahmed',
    date: 'September 10, 2023',
  },
  // Add more reviews with Bangladeshi authors as needed
];


const Reviews = () => {
  return (
    <div>
      {/* Other sections of your website */}
      <Testimonials reviews={reviews} />
    </div>
  )
}

export default Reviews


