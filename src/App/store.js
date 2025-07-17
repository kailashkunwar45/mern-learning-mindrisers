

import { configureStore } from "@reduxjs/toolkit";
import { blogApi } from "../features/blogs/blogApi";



export const store = configureStore({
  reducer: {
    [blogApi.reducerPath]: blogApi.reducer

  },
  middleware: (getDEfaultMiddleware) => getDEfaultMiddleware().concat(p[
    blogApi.middleware
  ]),
})