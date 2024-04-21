import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../config/app_config";
import { addUpcomingMovies } from "../redux/slice/moviesSlice";
import { UPCOMING_MOVIES_URL } from "../utils/constants/app_constants";

const useUpcomingMovies = async () => {
  const dispatch = useDispatch();
  const data = await fetch(UPCOMING_MOVIES_URL, API_OPTIONS);

  const json = await data.json();
  dispatch(addUpcomingMovies(json.results));
};

export default useUpcomingMovies;
