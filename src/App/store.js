


import { configureStore } from "@reduxjs/toolkit";
import { movieApi } from "../shared/movieApi";

export const store = configureStore({
  reducer: {
    [movieApi.reducerPath]: movieApi.reducer
  },

  //caching, polling ,invalidation
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      movieApi.middleware
    ]),
})