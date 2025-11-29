import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Success from './pages/Success'
import NotFound from './pages/NotFound'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/success',
    element: <Success />
  },
  {
    path: '*',
    element: <NotFound />
  }
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App