import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import PropTypes from 'prop-types';

const FeaturedRecipe = ({ recipe }) => {
  const { title, description, image, chef, likes } = recipe;
  return (
    <div className="rounded overflow-hidden shadow-lg">
      <LazyLoadImage src={image} alt={title} className="w-full h-[60%]" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-base">{description}</p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-[#5f8d0a46] rounded-full px-3 py-1 text-sm font-semibold  mr-2">
          Chef: {chef}
        </span>
        <span className="inline-block bg-[#5f8d0a46] rounded-full px-3 py-1 text-sm font-semibold">
          Likes: {likes}
        </span>
      </div>
    </div>
  );
};

FeaturedRecipe.propTypes = {
  recipe:PropTypes.object.isRequired
}

export default FeaturedRecipe;
