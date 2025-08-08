import { createBrowserRouter, RouterProvider } from "react-router"
import RootLayOut from "./components/RootLayOut";
import Home from "./features/home/Home.jsx"
import AdminPage from "./features/Admin/AdminPage.jsx";
import Login from "./features/auth/Login.jsx";
import Register from "./features/auth/Register.jsx";

export default function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayOut />,
      children: [
        {
          index: true,
          element: <Home />
        },

        {
          path: 'admin',
          element: <AdminPage />
        },



        {
          path: 'login',
          element: <Login />
        },
        {
          path: 'register',
          element: <Register />
        }

      ]
    },


  ]);





  return <RouterProvider router={router} />
}