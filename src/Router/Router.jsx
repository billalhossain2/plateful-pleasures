import {
    createBrowserRouter,
} from "react-router-dom";

import Home from "../components/pages/Home";
import LoginForm from "../components/LoginForm/LoginForm";
import RegistrationForm from "../components/RegistrationForm/RegistrationForm";
import NotFoundPage from "../components/NotFoundPage/NotFoundPage";
import ChefRecipes from "../components/pages/ChefRecipes";
import TermsAndConditions from "../components/pages/TermsAndConditions";
import User from "../components/pages/User";

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
        path:"/terms-and-conditions",
        element:<TermsAndConditions></TermsAndConditions>
    },
    {
        path:"/user",
        element:<User></User>
    },
    {
        path:"*",
        element:<NotFoundPage></NotFoundPage>
    }
  ]);

export default router;