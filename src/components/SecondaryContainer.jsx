import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import Footer from "./Footer";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  // console.log(movies.popularMovies);

  return (
   movies.nowPlayingMovies&& <div className=" ">
      <div className="absolute bg-black    mt-[37%] z-20  w-screen">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
        <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
        <Footer />
      </div>
    </div>
  );
};

export default SecondaryContainer;
