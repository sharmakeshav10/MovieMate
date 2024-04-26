import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../slice/moviesSlice";
import gptReducer from "../slice/gptSearchSlice";

const appStore = configureStore({
  reducer: {
    movies: moviesReducer,
    gpt: gptReducer,
  },
});

export default appStore;
