import React from 'react';
import './MovieCard.css';

const MovieCard = (props) =>{
    return (
        <div className="container">
            <div className="movie-card">
                <div className="movie-header" style={{ backgroundImage: `url(${props.movie.Poster})`}}>
                </div>
                <div className="movie-content">
                    <div className="movie-content-header">
                        <h3 className="movie-title">{props.movie.Title}</h3>
                    </div>
                    <div className="movie-info">
                        <div className="movie-info">
                            <label>Released</label>
                            <span>{props.movie.Released}</span>
                        </div>
                        <div className="info-section">
                            <label>IMDB Rating</label>
                            <span>{props.movie.imdbRating}</span>
                        </div>
                        <div className="info-section">
                            <label>Rated</label>
                            <span>{props.movie.Rated}</span>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
}