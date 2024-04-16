import React from "react";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Spotlight from "./Spotlight";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Spotlight />
    </div>
  );
};

export default Browse;
