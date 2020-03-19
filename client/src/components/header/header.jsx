import React from "react";
import "./header.scss";
import Nav from "./nav/nav.jsx";
import Hamburger from "./hamburger/hamburger.jsx";

class Header extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      wrapMenu: false
    };
    this.unwrapMenu = this.unwrapMenu.bind(this);
  }
  
  unwrapMenu(){
    this.setState({
      wrapMenu: ! this.state.wrapMenu
    });
  }

  render(){
    return(
      <header>
        <div id="page-name">
          <h1>LunchApp</h1>
        </div>
        <div onClick = {this.unwrapMenu}>
          <Hamburger/>
        </div>
        <Nav
          wraped = {this.state.wrapMenu}/>
      </header>
    );
  }  
}

export default Header;