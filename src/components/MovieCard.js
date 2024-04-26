import React from "react";
import { POSTER_CDN_URL } from "../utils/constants/app_constants";

const MovieCard = ({ posterPath, title }) => {
  return (
    <div className="w-36 mr-3 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
      <img alt={title + "poster"} src={POSTER_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
