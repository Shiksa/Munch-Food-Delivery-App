import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Success from './pages/Success'
import NotFound from './pages/NotFound'
import { Toaster } from 'react-hot-toast'
import ProtectedRoute from './components/protectedRoute/ProtectedRoute'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/success',
    element: <ProtectedRoute>
      <Success />
    </ProtectedRoute>
  },
  {
    path: '*',
    element: <NotFound />
  }
])

const App = () => {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <RouterProvider router={router} />
    </>
  )
}

export default App