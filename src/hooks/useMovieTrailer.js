import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../config/app_config";
import { addMovieTrailer } from "../redux/slice/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  //fetch trailer video && updating the store with trailer video data
  const getMovieTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos",
      API_OPTIONS
    );

    const json = await data.json();
    console.log(json.results);

    //there can be more than a single trailer for a movie
    const filterData = json.results.filter((video) => video.type === "Trailer");

    //if type===trailer then show filterData[0] else any type of video, i.e, (json.results[0])
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addMovieTrailer(trailer));
    console.log(trailer);
  };

  useEffect(() => {
    getMovieTrailer();
  }, []);
};

export default useMovieTrailer;
