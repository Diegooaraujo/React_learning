import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './router/Home.jsx'
import Contact from './router/contact.jsx'

import ErrorPage from './router/ErrorPage.jsx'

import{
  createBrowserRouter, RouterProvider, Router 
} from "react-router-dom"

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<ErrorPage/>,
    //componente base
    children:[{
      path:"/",
      element:<Home/>

    },
    {
      path:"contact",
      element: <Contact/>
    }
  
  ]
  },
  // {
  //   path:"contact",
  //   element:<Contact/>
  // }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
