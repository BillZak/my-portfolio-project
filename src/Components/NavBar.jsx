import React from 'react';
//import dependencies
import { NavLink } from 'react-router-dom';
// import css file
import './NavBar.css'

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-default headnav">
                    <div className="container-fluid">
                        <div className="navbar-header">
                        <button 
                            type="button" 
                            className="navbar-toggle collapsed" 
                            data-toggle="collapse" 
                            data-target="#bs-example-navbar-collapse-1" 
                            aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>

                             <NavLink to="/" className="navbar-brand" style={{color:'black'}}>BILAL</NavLink>

                        </div>

                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <NavLink to="/" exact activeClassName="select">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" exact activeClassName="select">About Me</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contacts" exact activeClassName="select">Contact Me</NavLink>
                            </li>
                            <li>
                                <NavLink to="/projects" exact activeClassName="select">My Projects</NavLink>
                            </li>
                        </ul>
                        </div>
                    </div>
             </nav> 
        </div>
    );
}

export default NavBar;
