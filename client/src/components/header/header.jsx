import React from "react";
import ClickOutside from "react-click-outside";
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
    this.toogleMenu = this.toogleMenu.bind(this);
    this.makeMenuWrap = this.makeMenuWrap.bind(this);
  }
  
  toogleMenu(){
    this.setState({
      wrapMenu: ! this.state.wrapMenu,
      isHamburgerClicked: ! this.state.isHamburgerClicked,
    });
  }

  makeMenuWrap(){
    if(this.state.wrapMenu !== false){
      this.toogleMenu();
    }
  }

  render(){
    return(
      <header>
        <ClickOutside onClickOutside={this.makeMenuWrap}>
          <div id="page-name">
            <h1>LunchApp</h1>
          </div>
          <div onClick = {this.toogleMenu}>
            <Hamburger
              isHamburgerClicked = {this.state.isHamburgerClicked}
            />
          </div>
          <Nav
            wraped = {this.state.wrapMenu}
            func = {this.toogleMenu}/>
        </ClickOutside>    
      </header>
    );
  }  
}

export default Header;