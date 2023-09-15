// ChefRecipes.js

import React from 'react';
import ChefRecipeCard from '../ChefRecipeCard/ChefRecipeCard';
import Navbar from '../shared/Navbar';


function ChefRecipes() {
  const chef = {
      "id": 1,
      "name": "Ahmed Hossain",
      "experience": "10 years",
      "recipeCount": 50,
      "likes": 2000,
      "image": "https://i.ibb.co/TWDZNJT/chef-1.jpg",
      "bio": "Passionate about Bangladeshi cuisine!",
  }; // Assuming you want to display the first chef's data

  const ChefRecipesData = [
    {
      "recipe_name": "Biriyani",
      "ingredients": ["Rice", "Chicken", "Spices", "Onion", "Tomato"],
      "cooking_method": "Cook rice with spices, then layer with chicken and cook.",
      "rating": 4.7,
      "image":"https://i.ibb.co/gTN5CDc/biriany.jpg"
    },
    {
      "recipe_name": "Hilsha Fish Curry",
      "ingredients": ["Hilsha fish", "Mustard", "Spices", "Coconut", "Turmeric"],
      "cooking_method": "Marinate fish with mustard and spices, then cook in gravy.",
      "rating": 4.5,
      "image":"https://i.ibb.co/DpHyHLr/hilsha-fish-curry.jpg"
    },
    {
      "recipe_name": "Chingri Malai Curry",
      "ingredients": ["Prawns", "Coconut milk", "Spices", "Ginger", "Garlic"],
      "cooking_method": "Cook prawns in coconut milk with spices.",
      "rating": 4.6,
      "image":"https://i.ibb.co/2nx9H0Z/Chingri-Malai-Curry.jpg"
    },
    {
      "recipe_name": "Fuska",
      "ingredients": ["Semolina balls", "Tamarind water", "Chickpeas", "Potatoes", "Chili"],
      "cooking_method": "Fill semolina balls with chickpeas and serve with tamarind water.",
      "rating": 4.8,
      "image":"https://i.ibb.co/FmsVycg/Fuska.jpg"
    },
    {
      "recipe_name": "Pitha",
      "ingredients": ["Rice flour", "Coconut", "Jaggery", "Cardamom", "Sesame seeds"],
      "cooking_method": "Prepare rice cakes filled with coconut and jaggery.",
      "rating": 4.9,
      "image":"https://i.ibb.co/wLPry8s/Pitha.jpg"
    }
  ]

  return (
    <>
    <Navbar></Navbar>
    <div className="container mx-auto p-4">
      <div className="bg-gray-200 p-4 rounded-lg">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3">
            <img
              src={`${chef.image}`} // Assuming your chef images are stored in the "images" folder
              alt={chef.name}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="md:w-2/3 mt-4 md:mt-0 md:ml-4">
            <h1 className="text-2xl font-semibold">{chef.name}</h1>
            <p className="text-gray-600">{chef.bio}</p>
            <div className="flex mt-2">
              <div className="mr-4">
                <p className="text-lg font-semibold">{chef.likes} Likes</p>
              </div>
              <div className="mr-4">
                <p className="text-lg font-semibold">{chef.recipeCount} Recipes</p>
              </div>
              <div>
                <p className="text-lg font-semibold">{chef.experience} Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Add recipe listing section here */}
      <h1 className='text-center font-bold text-3xl my-10'>Explore Ahmed Hossain's Recipes</h1>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
      {
        ChefRecipesData.map(recipe => <ChefRecipeCard recipe={recipe}></ChefRecipeCard>)
      }
      </div>
    </div>
    </>
  );
}

export default ChefRecipes;
