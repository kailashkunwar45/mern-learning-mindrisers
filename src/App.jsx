


import { createBrowserRouter, RouterProvider } from "react-router"
import RootLayOut from "./components/RootLayOut";
import NowPlaying from "./features/now_playing/NowPlaying";
import Popular from "./features/popular/Popular";
import TopRated from "./features/top-rated/TopRated";
import Upcoming from "./features/upcoming/Upcoming";
import SearchPage from "./features/search/SearchPage";


export default function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayOut />,
      children: [
        {
          index: true,
          element: <NowPlaying />
        },

        {
          path: 'popular',
          element: <Popular />
        },
        {
          path: '/movie-search/:query',
          element: <SearchPage />
        },
        {
          path: 'top_rated',
          element: <TopRated />
        },
        {
          path: 'upcoming',
          element: <Upcoming />
        }
      ]
    },


  ]);





  return <RouterProvider router={router} />
}