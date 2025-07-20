import { configureStore } from "@reduxjs/toolkit";
import { blogApi } from "../features/blogs/blogApi";



export const store = configureStore({
  reducer: {
    [blogApi.reducerPath]: blogApi.reducer
  },

  //caching, polling ,invalidation
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      blogApi.middleware
    ]),
})