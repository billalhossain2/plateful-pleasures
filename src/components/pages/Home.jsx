import React from 'react'
import Navbar from '../shared/Navbar'
import SliderBanner from '../carousel/Carousel'
import Chefs from '../chefs/Chefs'
import FeaturedRecipes from '../FeaturedRecipes/FeaturedRecipes'
import Reviews from '../Reviews/Reviews'
import Footer from '../shared/Footer'
import useTitle from '../Hooks/useTitle'

const Home = () => {
  useTitle("Home")
  return (
    <div>
        <Navbar></Navbar>
        <SliderBanner></SliderBanner>
        <Chefs></Chefs>
        <FeaturedRecipes></FeaturedRecipes>
        <Reviews></Reviews>
        <Footer></Footer>
    </div>
  )
}

export default Home