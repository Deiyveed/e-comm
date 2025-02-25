import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "./pages/Login"
import Dashboard from "./pages/dashboard/Dashboard"
import Products from "./pages/products/Products"
import ProtectedRoutes from "./ProtectedRoutes"
import Layout from "./components/Layout"
import Users from "./pages/users/Users"

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Login />
    },
    {
      path: '/',
      element: ( <ProtectedRoutes>
        <Layout />
      </ProtectedRoutes> ),
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />
      },

      {
        path: 'products',
        element: <Products />
      },

      {
        path: 'users',
        element: <Users />
      },
    ]
    },
  ])

  return (
      <RouterProvider router={router} />
  )
}

export default App