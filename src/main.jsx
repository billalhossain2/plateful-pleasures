import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Router.jsx'
import ThemeContext from './themeContext/ThemeContext.jsx'
import UserContext from './Contexts/UserContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <UserContext>
   <ThemeContext>
     <RouterProvider router={router}></RouterProvider>
   </ThemeContext>
   </UserContext>
  </React.StrictMode>,
)
