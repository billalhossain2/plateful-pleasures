import React, { useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ChefRecipeCard = ({recipe, chefName}) => {
  const [isDisable, setIsDisable] = useState(false)
  const handleDisable = (recipe)=>{
    setIsDisable(!isDisable)
    toast('Added to favourite list!', {autoClose:2000});

    //store to local storage
    if(!localStorage.getItem('favouritRecipes')){
      const stringRecipe = JSON.stringify([{...recipe, chefName, id:Date.now()}]);
      localStorage.setItem('favouritRecipes', stringRecipe)
    }else{
      const storedRecipes = localStorage.getItem('favouritRecipes');
      console.log(storedRecipes)
      const recipesArray = JSON.parse(storedRecipes);
      recipesArray.push({...recipe, chefName, id:Date.now()})
      localStorage.setItem('favouritRecipes', JSON.stringify(recipesArray))
    }
  }
  return (
    <div className="rounded-lg shadow-md p-4 m-2">
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
    <button disabled={isDisable} onClick={()=>handleDisable(recipe)} className={`bg-[#5F8D0A] hover:bg-[#0a8d2b] duration-500 text-white rounded-md px-3 py-1 mt-4 ${isDisable ? 'bg-[#b0eb42] hover:bg-[#b0eb42]' : ''}`}>
      Favorite
    </button>
    <ToastContainer></ToastContainer>
  </div>
  )
}

ChefRecipeCard.propTypes = {
  recipe:PropTypes.object.isRequired
}

export default ChefRecipeCard