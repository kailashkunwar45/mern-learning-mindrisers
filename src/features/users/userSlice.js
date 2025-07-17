

import { createSlice } from "@reduxjs/toolkit";
import { getUsersFromLocal, setUsersToLocal } from "../../local/localStorage";





export const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    users: getUsersFromLocal()
  },

  reducers: {

    addUser: (state, action) => {
      state.users.push(action.payload);
      setUsersToLocal(state.users);
    },

    updateUser: (state, action) => {
      state.users = state.users.map((user) => {
        return action.payload.id === user.id ? action.payload : user;
      });
      setUsersToLocal(state.users);

    },

    removeUser: (state, action) => {
      state.users.splice(action.payload, 1);
      setUsersToLocal(state.users);
    }

  }



});

export const { addUser, removeUser, updateUser } = userSlice.actions;