import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const ChefRecipeCard = ({recipe}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 m-2">
    <LazyLoadImage
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
    <button className="bg-[#5F8D0A] text-white rounded-md px-3 py-1 mt-4">
      Favorite
    </button>
  </div>
  )
}

export default ChefRecipeCard