

import { createBrowserRouter, RouterProvider } from "react-router"
import RootLayOut from "./components/RootLayOut";
import BlogList from "./features/blogs/BlogList";
import BlogForm from "./features/blogs/BlogForm";
import BlogUpdateForm from "./features/blogs/BlogUpdateForm";


export default function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayOut />,
      children: [
        {
          index: true,
          element: <BlogList />
        },
        {
          path: 'add-form',
          element: <BlogForm />
        },
        {
          path: 'update-form/:id',
          element: <BlogUpdateForm />
        }
      ]
    },


  ]);





  return <RouterProvider router={router} />
}