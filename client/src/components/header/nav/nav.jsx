import React from "react";
import {
  Link
} from "react-router-dom";
import PropTypes from "prop-types";
import "./nav.scss";

class Nav extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <nav className = {this.props.wraped ? "wraped" : ""}>
        <ul>
          <li onClick = {this.props.func}><Link to="/restaurants">RESTAURANTS</Link></li>
          <li onClick = {this.props.func}><Link to="/users">USERS</Link></li>
          <li onClick = {this.props.func}><Link to="/lunches">LUNCHES</Link></li>
        </ul>
      </nav>      
    );
  }  
}

Nav.propTypes = {
  wraped: PropTypes.bool,
  func: PropTypes.func
};

export default Nav;