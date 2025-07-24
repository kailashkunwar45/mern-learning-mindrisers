

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayOut from "./components/RootLayOut";
import PopularDrinks from "./features/CockCategory/PopularDrinks";
import AlcoholicDrinks from "./features/CockCategory/AlcoholicDrinks";
import SearchPage from "./features/Search/SearchPage";
import DrinkDetails from "./features/Details/DrinkDetails";
import NonAlcholicDrinks from "./features/CockCategory/NonAlcholicDrinks";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayOut />,
      children: [
        {
          index: true,
          element: <PopularDrinks />,
        },
        {
          path: "alcoholic",
          element: <AlcoholicDrinks />,
        },
        {
          path: "non-alcoholic",
          element: <NonAlcholicDrinks />,
        },
        {
          path: "search",
          element: <SearchPage />,
        },
        {
          path: "drinks/:id",
          element: <DrinkDetails />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
