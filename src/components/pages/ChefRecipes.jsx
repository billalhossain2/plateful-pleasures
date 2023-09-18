// ChefRecipes.js

import React, { useEffect, useState } from 'react';
import ChefRecipeCard from '../ChefRecipeCard/ChefRecipeCard';
import Navbar from '../shared/Navbar';
import useTitle from '../Hooks/useTitle';
import Footer from '../shared/Footer';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import useFetch from '../Hooks/useFetch';


function ChefRecipes() {
  
  useTitle("Chef Recipies")
 const chefRecipesData = useFetch("data/chef-recipes.json")

  const chef = {
      "id": 1,
      "name": "Ahmed Hossain",
      "experience": "10 years",
      "recipeCount": 50,
      "likes": 2000,
      "image": "https://i.ibb.co/TWDZNJT/chef-1.jpg",
      "bio": "Passionate about Bangladeshi cuisine!",
  }; // Assuming you want to display the first chef's data

  return (
    <>
    <Navbar></Navbar>
    <div className="container mx-auto p-4">
      <div className="p-4 rounded-lg">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3">
            <LazyLoadImage
              src={`${chef.image}`}
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
        chefRecipesData.map(recipe => <ChefRecipeCard recipe={recipe}></ChefRecipeCard>)
      }
      </div>
    </div>
    <Footer></Footer>
    </>
  );
}

export default ChefRecipes;
