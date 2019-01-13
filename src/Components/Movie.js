import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Movie extends Component {
    rented = () => {
        this.props.rented(this.props.id)
    }
    render() {
        return (
        
            <div className="catalog">
                <FontAwesomeIcon id={this.props.id} onClick={this.rented} icon={this.props.isRented === false ? "plus" : "minus"} />
                <Link to={"/movies/" + this.props.id}>
                    <img src={this.props.img}></img>
                </Link>
            </div>
            


        )
    }
}

export default Movie