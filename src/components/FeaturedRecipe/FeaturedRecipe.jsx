import React from 'react';

const FeaturedRecipe = ({ recipe }) => {
  const { title, description, image, chef, likes } = recipe;

  return (
    <div className="rounded overflow-hidden shadow-lg">
      <img src={image} alt={title} className="w-full h-[60%]" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          Chef: {chef}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          Likes: {likes}
        </span>
      </div>
    </div>
  );
};

export default FeaturedRecipe;
