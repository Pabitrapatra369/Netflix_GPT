import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
    if (!movies || !Array.isArray(movies)) return null;

  return (
    <div >
      <h1 className="text-white ml-10 font-bold text-2xl mb-2">
        {title + ">"}
      </h1>
      <div className="flex overflow-x-scroll scrollbar-hide whitespace-nowrap mb-3 ">
        <div className="ml-10 flex gap-4 ">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
