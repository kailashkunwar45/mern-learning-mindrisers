import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../features/user/userSlice.js";
import { mainApi } from "./mainApi.js";
import { cartSlice } from "../features/cart/cartslice.js";


export const store = configureStore({
  reducer: {
    [userSlice.name]: userSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
    [mainApi.reducerPath]: mainApi.reducer,

  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([mainApi.middleware

  ])

});