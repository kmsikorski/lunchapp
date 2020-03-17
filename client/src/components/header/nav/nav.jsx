import React from "react";
import {
  Link
} from "react-router-dom";
import "./nav.scss";

class Nav extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      isHamburgerClicked: false
    };
    this.toogleHamburger = this.toogleHamburger.bind(this);
  }

  toogleHamburger(){
    this.setState(state => ({
      isHamburgerClicked: !this.state.isHamburgerClicked
    }))
    console.log(this.state.isHamburgerClicked)
  }


  render(){
    return(
      <nav>
        <div className = {`hamburger ${(this.state.isHamburgerClicked? "cross" : "" )}`}
          onClick = {this.toogleHamburger}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul>
          <li><Link to="/restaurants">RESTAURANTS</Link></li>
          <li><Link to="/users">USERS</Link></li>
          <li><Link to="/lunches">LUNCHES</Link></li>
        </ul>
      </nav>      
    );
  }
  
}

export default Nav;