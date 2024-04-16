import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../config/app_config";
import { useDispatch, useSelector } from "react-redux";
import { addMovieTrailer } from "../redux/slice/moviesSlice";

const VideoBackground = ({ movieId }) => {
  //   const [trailerId, setTrailerId] = useState(null);
  const dispatch = useDispatch();

  //to fetch and display the video
  const trailerVideo = useSelector((store) => store.movies?.movieTrailer);

  const getMovieTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/693134/videos",
      API_OPTIONS
    );

    const json = await data.json();
    console.log(json.results);

    //there can be more than a single trailer for a movie
    const filterData = json.results.filter((video) => video.type === "Trailer");

    //if type===trailer then show filterData[0] else any type of video, i.e, (json.results[0])
    const trailer = filterData.length ? filterData[0] : json.results[0];
    // setTrailerId(trailer.key);
    dispatch(addMovieTrailer(trailer));
    console.log(trailer);
  };

  useEffect(() => {
    getMovieTrailer();
  }, []);

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
