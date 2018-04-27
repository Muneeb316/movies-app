import React from 'react';

const MovieDetail = ({movie}) =>{
    if(!movie){
        return <div> Loading....</div>
    }
    const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    console.log(movie);
    return <div className="col-md-6 movie-detail">
            <div className="details">
                <h2>{movie.title}</h2>
                <div clasName="d-flex mt-2">
                    <div className="col-md-3">
                        <img className="meda-object image-height" src={imageUrl} />
                    </div>
                    <div className="col-md-9">
                         <p className="p-2 pt-2">{movie.overview}</p>
                         <p><span>Original Title: </span>{movie.original_title}</p>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="col-md-6">
                        <ul>
                            <li>Release Date: {movie.release_date}</li>
                            <li>Popularity: {movie.popularity}</li>
                            <li>Language: {movie.original_language}</li>
                            <li>Vote Average: {movie.vote_average}</li>
                        </ul>
                    </div>
                </div>
            <div/>
        </div>
    </div>;
}

export default MovieDetail;