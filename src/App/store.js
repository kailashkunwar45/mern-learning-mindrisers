

import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../features/users/userSlice";



console.log(userSlice.reducer);

export const store = configureStore({
  reducer: {
    userSlice: userSlice.reducer
  }
})