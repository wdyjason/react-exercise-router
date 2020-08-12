import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.css'
class Header extends Component {
    render() {

        return(
            <div className="my_header">    
               <NavLink className="navlink" exact to="/about-us" activeClassName="active">About Us</NavLink>
               <NavLink className="navlink" exact to="/my-profile" activeClassName="active">My Profile</NavLink>
               <NavLink className="navlink" exact to="/products" activeClassName="active">Produts</NavLink>
               <NavLink className="navlink" exact to="/" activeClassName="active">Home</NavLink>
            </div>
        );
    }
}
export default Header;