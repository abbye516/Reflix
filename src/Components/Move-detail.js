import React, { Component } from 'react';
import NavBar from './NavBar';

class MovieDetail extends Component {

    render() {
        let wantedMovieId = parseInt(this.props.match.params.id)
        const allMovies = this.props.movies
        const movie = allMovies.find(f => {
            return (f.id === wantedMovieId)
        })

        return (
            <div>
                <NavBar />
                <div className="movie-details">
                    <span>{movie.title} ({movie.year})</span>
                    <img src={movie.img} alt={movie.title} ></img>
                    <span> {movie.descrShort}</span>
                </div>
            </div>
        )
    }
}

export default MovieDetail