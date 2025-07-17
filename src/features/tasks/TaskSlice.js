
import { createSlice } from "@reduxjs/toolkit";
import { gettasksFromLocal, settasksToLocal } from "../../local/localStorage";



const initialState = {
  tasks: gettasksFromLocal() || [],
};

export const taskSlice = createSlice({
  name: "taskSlice",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
      settasksToLocal(state.tasks);
    },
    updateTask: (state, action) => {
      const index = state.tasks.findIndex((t) => t.id === action.payload.id);
      if (index !== -1) {
        state.tasks[index] = action.payload;
        settasksToLocal(state.tasks);
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload);
      settasksToLocal(state.tasks);
    },
  },
});

export const { addTask, updateTask, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;
