import React from 'react';

const ChefCard = ({ chefData }) => {
  const { name, experience, recipeCount, likes, image } = chefData;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border-[1px] border-solid border-[#d8d3d3]">
      <img src={image} alt={name} className="h-[300px] w-full object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-600">Experience: {experience} years</p>
        <p className="text-gray-600">Recipes: {recipeCount}</p>
        <p className="text-gray-600">Likes: {likes}</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-2">
          View Recipes
        </button>
      </div>
    </div>
  );
};

export default ChefCard;
