import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../config/app_config";
import { addUpcomingMovies } from "../redux/slice/moviesSlice";

const useUpcomingMovies = async () => {
  const dispatch = useDispatch();
  const data = await fetch(
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
    API_OPTIONS
  );

  const json = await data.json();
  dispatch(addUpcomingMovies(json.results));
};

export default useUpcomingMovies;
