import React from "react";
import { POSTER_CDN_URL } from "../utils/constants/app_constants";

const MovieCard = ({ posterPath, title }) => {
  return (
    <div className="w-36 mr-3">
      <img alt={title + "poster"} src={POSTER_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
