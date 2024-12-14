import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './router/Home.jsx'
import Contact from './router/contact.jsx'
//error page
import ErrorPage from './router/ErrorPage.jsx'
//configurando rota
import{
  createBrowserRouter, RouterProvider, Router 
} from "react-router-dom"

import Product from './components/Product.jsx'

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
    },
    //rotas dinamicas
    {
      path:"products/:id",
      element: <Product/>
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
