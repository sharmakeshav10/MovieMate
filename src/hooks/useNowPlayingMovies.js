import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../config/app_config";
import { addNowPlayingMovies } from "../redux/slice/moviesSlice";
import { useEffect } from "react";
import { NOW_PLAYING_MOVIES_URL } from "../utils/constants/app_constants";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(NOW_PLAYING_MOVIES_URL, API_OPTIONS);

    const json = await data.json();
    console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
