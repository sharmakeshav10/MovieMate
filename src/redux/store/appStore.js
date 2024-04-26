import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../slice/moviesSlice";
import gptReducer from "../slice/gptSearchSlice";
import configReducer from "../slice/configSlice";

const appStore = configureStore({
  reducer: {
    movies: moviesReducer,
    gpt: gptReducer,
    config: configReducer,
  },
});

export default appStore;
