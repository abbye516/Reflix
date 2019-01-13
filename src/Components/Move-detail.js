import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class MovieDetail extends Component {

    render() {
        let wantedMovieId = parseInt(this.props.match.params.id)
        console.log(wantedMovieId)
        // let movies = this.props.movies[wantedMovie].title
        const allMovies= this.props.movies
        // console.log(wantedMovieId.id)
        const movie = allMovies.find(f => {
            return(f.id === wantedMovieId)})

        return (
            <div>
            <div className="home-links">
                <span><Link to="/">Home</Link> </span>
                <span><Link to="/catalog">Catalog</Link> </span>
                <span id="reflix">Reflix</span>
            </div>
            <div className="movie-details">
              <span>{movie.title} ({movie.year})</span>
              <img src={movie.img}></img>
             <span> {movie.descrShort}</span>
            </div>
            </div>
        )
    }
}

export default MovieDetail