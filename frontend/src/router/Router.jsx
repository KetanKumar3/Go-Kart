import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import Dashboard from '../pages/Dashboard'
import AdminLogin from '../components/AdminLogin'
import Admin from '../pages/Admin'

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
        path:'/admin/login',
        element:<Admin />
    },
    {
        path:'/admin/dashboard',
        element:<Dashboard />
    }
  ])
  return (
    <div>
        <RouterProvider router={router} />
    </div>
  )
}

export default Router