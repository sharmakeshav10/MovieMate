import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../config/app_config";
import { useDispatch, useSelector } from "react-redux";
import { addMovieTrailer } from "../redux/slice/moviesSlice";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  //to fetch and display the video
  const trailerVideo = useSelector((store) => store.movies?.movieTrailer);

  useMovieTrailer(movieId);

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/" + trailerVideo?.key}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
