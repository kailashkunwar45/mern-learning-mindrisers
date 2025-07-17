



import { createBrowserRouter, RouterProvider } from "react-router"
import RootLayOut from "./components/RootLayOut";



export default function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayOut />,
      children: [
        {
          index: true,

        },


      ]
    },


  ]);





  return <RouterProvider router={router} />
}