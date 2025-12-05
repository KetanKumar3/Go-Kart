import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import Dashboard from '../pages/Dashboard'
import AdminLogin from '../components/AdminLogin'
import Admin from '../pages/Admin'
import UserLogin from '../components/UserLogin'
import UserSignup from '../components/UserSignup'
import ShopDescription from '../components/ShopDescription'

const Router = () => {
  const router = createBrowserRouter([
    {
        path:'/',
        element:<Home />
    },
    {
        path:'/shop',
        element:<Shop />
    },
    {
        path:'/shop/:id',
        element:<ShopDescription />
    },
    {
        path:'/admin/login',
        element:<Admin />
    },
    {
        path:'/admin/dashboard',
        element:<Dashboard />
    },
    {
        path:'/user/login',
        element:<UserLogin />
    },
    {
        path:'/user/signup',
        element:<UserSignup />
    },

  ])
  return (
    <div>
        <RouterProvider router={router} />
    </div>
  )
}

export default Router