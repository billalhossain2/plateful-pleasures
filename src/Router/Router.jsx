import {
    createBrowserRouter,
} from "react-router-dom";

import Home from "../components/pages/Home";
import LoginForm from "../components/LoginForm/LoginForm";
import RegistrationForm from "../components/RegistrationForm/RegistrationForm";
import NotFoundPage from "../components/NotFoundPage/NotFoundPage";
import ChefRecipes from "../components/pages/ChefRecipes";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
    {
        path:"/login",
        element:<LoginForm></LoginForm>
    },
    {
        path:"/register",
        element:<RegistrationForm></RegistrationForm>
    },
    {
        path:"/chef-recipes",
        element:<ChefRecipes></ChefRecipes>
    },
    {
        path:"*",
        element:<NotFoundPage></NotFoundPage>
    }
  ]);

export default router;