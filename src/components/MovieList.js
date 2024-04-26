import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies[0].poster_path);
  return (
    <div className="py-2 px-16">
      <h1 className="text-white py-3 text-xl">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              posterPath={movie.poster_path}
              title={movie.original_title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
