import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class Movie extends Component {

    render() {
        let movies = this.props.state.movies
        return (
            <div className="movie-page">
                   {movies.map(m => {
                        return (
                            
                                <div className="movie" >
                                   <img src={m.img}></img>
                                </div>
                         
                        )
                    })}
            </div>
            )
        }
    }
    
export default Movie