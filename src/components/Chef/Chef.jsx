import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
const ChefCard = ({ chefData }) => {
  const { name, experience, recipeCount, likes, image } = chefData;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border-[1px] border-solid border-[#d8d3d3]">
      <LazyLoadImage src={image} alt={name} className="h-[300px] w-full object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-600">Experience: {experience}</p>
        <p className="text-gray-600">Recipes: {recipeCount}</p>
        <p className="text-gray-600">Likes: {likes}</p>
        <Link to="/chef-recipes">
        <button className="bg-[#5F8D0A] hover:bg-[#3a8d0a] text-white font-bold py-2 px-4 rounded mt-2">
          View Recipes
        </button>
        </Link>
      </div>
    </div>
  );
};

export default ChefCard;
