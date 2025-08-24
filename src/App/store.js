import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../features/user/userSlice.js";
import { mainApi } from "./mainApi.js";

export const store = configureStore({
  reducer: {
    [userSlice.name]: userSlice.reducer,
    [mainApi.reducerPath]: mainApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([mainApi.middleware

  ])

});