import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Landing extends Component {
    constructor() {
        super()
        this.state = {
            users: [
                { name: "Abby", color: "purple" },
                { name: "Ethan", color: "green" },
                { name: "Jake", color: "blue" },
                { name: "Gavi", color: "pink" },
            ]
        }
    }
    render() {
        let users = this.state.users
        return (
            <div className="landing-page">
                <div className="home-links">
                    <span>Home </span>
                    <span ><Link to="/catalog" >Catalog</Link> </span>
                    <span id="reflix">Reflix</span>
                </div>
                <h1 className="heading" >Who's Watching?</h1>

                <div className="user-container">

                    {users.map(u => {
                        return (
                            <Link to="/catalog">
                                <div className="user" style={{ backgroundColor: u.color }}>
                                    <div className="ind-user">{u.name}</div>
                                </div>
                            </Link>

                        )
                    })}
                </div>

            </div>
        )
    }
}

export default Landing