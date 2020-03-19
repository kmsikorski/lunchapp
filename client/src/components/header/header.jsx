import React from "react";
import "./header.scss";
import Nav from "./nav/nav.jsx";
import Hamburger from "./hamburger/hamburger.jsx";

class Header extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      wrapMenu: false,
      isHamburgerClicked: false
    };
    this.unwrapMenu = this.unwrapMenu.bind(this);
  }
  
  unwrapMenu(){
    this.setState({
      wrapMenu: ! this.state.wrapMenu,
      isHamburgerClicked: ! this.state.isHamburgerClicked,
    });
  }

  render(){
    return(
      <header>
        <div id="page-name">
          <h1>LunchApp</h1>
        </div>
        <div onClick = {this.unwrapMenu}>
          <Hamburger
            isHamburgerClicked = {this.state.isHamburgerClicked}
          />
        </div>
        <Nav
          wraped = {this.state.wrapMenu}
          func = {this.unwrapMenu}/>
      </header>
    );
  }  
}

export default Header;