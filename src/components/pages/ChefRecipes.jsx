// ChefRecipes.js

import React, { useEffect, useState } from "react";
import ChefRecipeCard from "../ChefRecipeCard/ChefRecipeCard";
import Navbar from "../shared/Navbar";
import useTitle from "../Hooks/useTitle";
import Footer from "../shared/Footer";
import { LazyLoadImage } from "react-lazy-load-image-component";
import useFetch from "../Hooks/useFetch";
import { useParams } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";
import ReactImageMagnify from "react-image-magnify";
function ChefRecipes() {
  const { id } = useParams();
  useTitle("Chef Recipies");
  const chefRecipesData = useFetch(
    `https://plateful-pleasures-server.vercel.app/chef-recipes/${id}`
  );

  return (
    <>
      <Navbar></Navbar>
      <div className="container mx-auto p-4">
        {chefRecipesData.length === 0 && (
          <div className="flex justify-center my-5">
            <TailSpin
              height="80"
              width="80"
              color="#4fa94d"
              ariaLabel="tail-spin-loading"
              radius="1"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        )}
        <div className="p-4 rounded-lg">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3">
              {/* <LazyLoadImage
                src={`${chefRecipesData.image}`}
                alt={chefRecipesData.name}
                className="w-full h-auto rounded-lg"
              /> */}

              {/* magnify image  */}
              <div>
                <ReactImageMagnify
                  {...{
                    smallImage: {
                      alt: "Wristwatch by Ted Baker London",
                      isFluidWidth: true,
                      src: chefRecipesData.image,
                    },
                    largeImage: {
                      src: chefRecipesData.image,
                      width: 700,
                      height: 800,
                    },
                  }}
                />
              </div>
            </div>
            <div className="md:w-2/3 mt-4 md:mt-0 md:ml-4">
              <h1 className="text-2xl font-semibold">{chefRecipesData.name}</h1>
              <p className="text-gray-600">{chefRecipesData.bio}</p>
              <div className="flex mt-2">
                <div className="mr-4">
                  <p className="text-lg font-semibold">
                    {chefRecipesData.likes} Likes
                  </p>
                </div>
                <div className="mr-4">
                  <p className="text-lg font-semibold">
                    {chefRecipesData.recipeCount} Recipes
                  </p>
                </div>
                <div>
                  <p className="text-lg font-semibold">
                    {chefRecipesData.experience} Experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Add recipe listing section here */}
        <h1 className="text-center font-bold text-3xl my-10">
          Explore Ahmed Hossain's Recipes
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
          {chefRecipesData?.recipes?.map((recipe, index) => (
            <ChefRecipeCard
              key={index}
              chefName={chefRecipesData.name}
              recipe={recipe}
            ></ChefRecipeCard>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default ChefRecipes;
