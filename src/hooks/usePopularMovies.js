import { useEffect } from "react";
import { API_OPTIONS } from "../config/app_config";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../redux/slice/moviesSlice";
import { POPULAR_MOVIES_URL } from "../utils/constants/app_constants";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const data = await fetch(POPULAR_MOVIES_URL, API_OPTIONS);

    const json = await data.json();
    console.log(json);
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
