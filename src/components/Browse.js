import React from "react";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Spotlight from "./Spotlight";
import Header from "./Header";
import Trending from "./Trending";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      <Spotlight />
      <Trending />
    </div>
  );
};

export default Browse;
