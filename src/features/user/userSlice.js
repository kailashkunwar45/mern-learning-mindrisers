import { createSlice } from "@reduxjs/toolkit";
import { clearLocal, getUserFromLocal, setUserToLocal } from "../../local/localStorage.js";



export const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    user: getUserFromLocal()
  },

  reducers: {

    addUser: (state, action) => {
      state.user = action.payload;
      setUserToLocal(state.user);
    },

    removeUser: (state, action) => {
      state.user = null;
      clearLocal();
    }

  }


});

export const { addUser, removeUser } = userSlice.actions;