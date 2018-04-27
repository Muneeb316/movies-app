import React, { Component } from "react";
import MovieListItem from "./Movie_list_items";


const MovieList = (props) => {
    console.log('props -->', props)
    const movieItems = props.movies.map((movie) => {
        return (
        <MovieListItem 
            onMovieSelect= {props.onMovieSelect}
            key={movie.id} 
            movie={movie} />
        )
    })
  return (
      <div className="movieList col-md-12"> 
        <ul className="list-group ">
            {movieItems}
        </ul>
      </div>
    
  );
};
export default MovieList;
