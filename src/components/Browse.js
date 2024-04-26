import React from "react";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Spotlight from "./Spotlight";
import Header from "./Header";
import Trending from "./Trending";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const gptSearchView = useSelector((store) => store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      {gptSearchView ? (
        <GptSearch />
      ) : (
        <>
          <Spotlight />
          <Trending />
        </>
      )}
    </div>
  );
};

export default Browse;
