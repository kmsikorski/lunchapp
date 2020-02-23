import React from 'react';
import {
    Link
  } from "react-router-dom";
import './nav.scss';

function Nav(){
    return(
            <nav>
                <ul>
                    <li><Link to="/restaurants">RESTAURANTS</Link></li>
                    <li><Link to="/users">USERS</Link></li>
                    <li><Link to="/lunches">LUNCHES</Link></li>

                </ul>

        </nav>      
    )
}


export default Nav;