

import { createSlice } from "@reduxjs/toolkit";
import { setUsersTolocal } from "../../local/localStorage";





export const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    users: []
  },

  reducers: {

    addUser: (state, action) => {
      state.users.push(action.payload);
      setUsersTolocal(state.users);

    },

    updateUser: (state, action) => {

    },

    removeUser: (state, action) => {
      state.users.splice(action)

    },


  }



});

export const { addUser } = userSlice.actions;