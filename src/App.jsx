import Header from "./components/shared/Header";
import Chefs from "./components/chefs/Chefs";
import FeaturedRecipes from "./components/FeaturedRecipes/FeaturedRecipes";
import Reviews from "./components/Reviews/Reviews";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/shared/Footer";
const App = () => {
  return (
    <div>
      <Header></Header>
      <Chefs></Chefs>
      <FeaturedRecipes></FeaturedRecipes>
      <Reviews></Reviews>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </div>
  );
};

export default App;
