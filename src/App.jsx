import Header from "./components/shared/Header";
import Chefs from "./components/chefs/Chefs";
import FeaturedRecipes from "./components/FeaturedRecipes/FeaturedRecipes";
import Reviews from "./components/Reviews/Reviews";
const App = () => {
  return (
    <div>
      <Header></Header>
      <Chefs></Chefs>
      <FeaturedRecipes></FeaturedRecipes>
      <Reviews></Reviews>
    </div>
  );
};

export default App;
