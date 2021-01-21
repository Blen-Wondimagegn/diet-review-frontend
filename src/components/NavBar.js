import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export class NavBar extends Component {
    render() {
        return (
            <nav>
                <div className="container dark ">
                    <NavLink to="/" className="brand-logo "><h4> Home</h4> </NavLink>
                    <ul className="right">
                        <li><NavLink to="/diets/new">Add Your Diet Plan</NavLink></li>
                        <li><NavLink to="/diets">Check Out Diet Plans</NavLink></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default NavBar