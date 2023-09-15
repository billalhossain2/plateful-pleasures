import Header from "./components/shared/Header";
import Chefs from "./components/chefs/Chefs";
import FeaturedRecipes from "./components/FeaturedRecipes/FeaturedRecipes";
import Reviews from "./components/Reviews/Reviews";
import Footer from "./components/shared/Footer";
import SliderBanner from "./components/carousel/Carousel";
import Navbar from "./components/shared/Navbar";
const App = () => {
  return (
    <div className="max-w-[90%] mx-auto">
      {/* <Header></Header> */}
      <Navbar></Navbar>
      <SliderBanner></SliderBanner>
      <Chefs></Chefs>
      <FeaturedRecipes></FeaturedRecipes>
      <Reviews></Reviews>
      <Footer></Footer>
    </div>
  );
};

export default App;
