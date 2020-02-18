import React from 'react';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
import './nav.scss';

function Nav(){
    return(
        <Router>
            <nav>
                <ul>
                    <li><Link to="/RESTAURANTS">RESTAURANTS</Link></li>
                    <li><Link to="/USERS">USERS</Link></li>
                </ul>
            </nav>
        </Router>
        
    )
}


export default Nav;