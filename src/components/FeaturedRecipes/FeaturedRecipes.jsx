import React, { useEffect, useState } from 'react'
import FeaturedRecipe from '../FeaturedRecipe/FeaturedRecipe'
const FeaturedRecipes = () => {
    const [featuredRecipes, setFeaturedRecipes] = useState([])
    useEffect(()=>{
        fetch(`data/featured-recipes.json`)
        .then(res => res.json())
        .then(data => setFeaturedRecipes(data))
    }, [])
  return (
    <div className='my-16'>
        <h1 className="text-3xl font-bold text-center mb-10">Featured Recipes</h1>
       <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
       {featuredRecipes.map((recipe, index) => (
        <FeaturedRecipe key={index} recipe={recipe} />
      ))}
       </div>
    </div>
  )
}

export default FeaturedRecipes