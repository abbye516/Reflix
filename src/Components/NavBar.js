import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class NavBar extends Component {

    render() {
        return (

            <div className="home-links">
                <span><Link to="/">Home</Link> </span>
                <span><Link to="/catalog" >Catalog</Link> </span>
                <span id="reflix">Reflix</span>
                <span>Suggestions</span>
            </div>



        )
    }
}

export default NavBar