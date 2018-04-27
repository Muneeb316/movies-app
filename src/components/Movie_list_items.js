import React from 'react';

const MovieListItem = ({movie, onMovieSelect}) => {	
	const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
	return (
		<li onClick={() =>onMovieSelect(movie)} className= "list-group-item">
			<div className="movie-list">
				<div className="media-left">
					<img className="listImg" src={imageUrl} />
				</div>
				<div className="media-body">
					<div className="media-heading">
						<h1>{movie.title} </h1>
					</div>
				</div>
			</div>
		</li>
	)
}

export default MovieListItem