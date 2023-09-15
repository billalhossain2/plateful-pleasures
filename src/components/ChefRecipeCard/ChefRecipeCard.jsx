import React from 'react'

const ChefRecipeCard = ({recipe}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 m-2">
    <img
      src={recipe.image}
      alt={recipe.recipe_name}
      className="w-full h-72 object-cover rounded-md mb-2"
    />
    <h2 className="text-xl font-semibold">{recipe.recipe_name}</h2>
    <p className="text-gray-600 mt-2">
      <strong>Ingredients:</strong> {recipe.ingredients.join(', ')}
    </p>
    <p className="text-gray-600 mt-2">
      <strong>Cooking Method:</strong> {recipe.cooking_method}
    </p>
    <p className="text-gray-600 mt-2">
      <strong>Rating:</strong> {recipe.rating}
    </p>
    <button className="bg-blue-500 text-white rounded-md px-3 py-1 mt-4">
      Favorite
    </button>
  </div>
  )
}

export default ChefRecipeCard