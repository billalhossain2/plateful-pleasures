import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import { AiFillDelete } from 'react-icons/ai';
const FavouriteRecipes = () => {
    const [favourites, setFavourites] = useState([])
    useEffect(()=>{
    const storedFavouriteRecipes = localStorage.getItem("favouritRecipes");
    const favouriteRecipesArr = JSON.parse(storedFavouriteRecipes)
    setFavourites(favouriteRecipesArr)
    }, [])

    const handleDelete = (id)=>{
        const storedFavouriteRecipes = localStorage.getItem("favouritRecipes");
        const favouriteRecipesArr = JSON.parse(storedFavouriteRecipes)
        const restRecipes = favouriteRecipesArr.filter(favRacipe => favRacipe.id !== id);
        localStorage.setItem('favouritRecipes', JSON.stringify(restRecipes))
        setFavourites(restRecipes)
    }
  return (
    <>
    <Navbar></Navbar>
    <div className='flex flex-col justify-center items-center my-5'>
        <h1 className="text-3xl font-bold my-5">Favourite Recipes</h1>
        <table>
            <thead className='bg-[#5F8D0A] py-5 text-white'>
                <tr>
                    <th className='py-2 px-10'>Image</th>
                    <th className='py-2 px-10'>Chef</th>
                    <th className='py-2 px-10'>Title</th>
                    <th className='py-2 px-10'>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    favourites?.map(favRecipe => (
                <tr>
                    <td className='px-10 py-5'><img className='w-20 h-14' src={favRecipe.image} alt="" /></td>
                    <td className='px-10 py-5'>{favRecipe.chefName}</td>
                    <td className='px-10 py-5'>{favRecipe.recipe_name}</td>
                    <td className='px-10 py-5'><button onClick={()=>handleDelete(favRecipe.id)}><AiFillDelete className='text-red-500 text-3xl'></AiFillDelete></button></td>
                </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
    <Footer></Footer>
    </>
  )
}

export default FavouriteRecipes