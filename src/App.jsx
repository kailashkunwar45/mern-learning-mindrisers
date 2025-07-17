



import { createBrowserRouter, RouterProvider } from "react-router"
import RootLayOut from "./components/RootLayOut";
import UserList from "./features/users/UserList";
import UserForm from "./features/users/UserForm";
import UpdateForm from "./features/users/UpdateForm";


export default function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayOut />,
      children: [
        {
          index: true,
          element: <UserList />
        },
        {
          path: 'add-user',
          element: <UserForm />
        },
        {
          path: 'update-user/:id',
          element: <UpdateForm />
        }

      ]
    },


  ]);





  return <RouterProvider router={router} />
}