import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../slice/moviesSlice";

const appStore = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});

export default appStore;
