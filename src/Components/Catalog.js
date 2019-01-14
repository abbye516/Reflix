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
                <div className="input-bud">
                    <input placeholder="Search" value={this.props.searchText}  onChange={this.props.search} ></input>
                    <span id="budget">Budget:${this.props.budget}</span>

                    <div >
                        {this.props.budget < 10  ?
                            <h2>Rented Movies</h2> : null}
                        <div className="movie-page">
                            {this.props.movies.filter(f => f.isRented)
                                .map(m => (
                                    <Movie id={m.id} title={m.title} searched={m.isSearched}
                                        isRented={m.isRented} img={m.img} year={m.year} descrShort={m.descrShort}
                                        rented={this.props.rented} returnMovie={this.props.returnMovie} />))}
                        </div>
                    </div>
                    <div>
                        <h2>Catalog</h2>
                        <div className="movie-page">
                            {this.props.movies.map(m => (
                                <Movie id={m.id} title={m.title}
                                    isRented={m.isRented} isSearched={m.isSearched} img={m.img} year={m.year} descrShort={m.descrShort}
                                    rented={this.props.rented} returnMovie={this.props.returnMovie} />))}
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Catalog