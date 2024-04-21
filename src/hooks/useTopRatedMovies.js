import { useEffect } from "react";
import { API_OPTIONS } from "../config/app_config";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../redux/slice/moviesSlice";
import { TOP_RATED_MOVIES_URL } from "../utils/constants/app_constants";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    const data = await fetch(TOP_RATED_MOVIES_URL, API_OPTIONS);

    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
