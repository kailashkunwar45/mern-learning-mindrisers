import { createBrowserRouter, RouterProvider } from "react-router-dom"; // fixed import from react-router-dom
import RootLayOut from "./components/RootLayOut";

import TasksForm from "./features/tasks/TasksForm";
import UpdateTask from "./features/tasks/UpdateTask";
import TasksLists from "./features/tasks/TasksLists";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayOut />,
      children: [
        {
          index: true,
          element: <TasksLists />,
        },
        {
          path: "add-user",
          element: <TasksForm />,
        },
        {
          path: "update-user/:id",
          element: <UpdateTask />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
