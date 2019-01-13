import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Movie from './Movie';

class Catalog extends Component {

    render() {
        // console.log(this.props.movies)
        //gives array of movies
        return (
            <div className="catalog-page">
                <div className="home-links">
                    <span><Link to="/">Home</Link> </span>
                    <span><Link to="/catalog">Catalog</Link> </span>
                    <span id="reflix">Reflix</span>
                </div>
                <div>
                    <input placeholder="Search"></input>
                    <span id="budget">Budget:${this.props.budget}</span>
                    <div className="movie-page">
                        
                        {this.props.movies.map(m => {
                            return (
                                <Movie id={m.id} title={m.title}
                                    isRented={m.isRented} img={m.img} year={m.year} descrShort={m.descrShort}
                                    rented={this.props.rented} returnMovie={this.props.returnMovie} />
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default Catalog