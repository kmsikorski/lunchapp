import React from "react";
import {
  Link
} from "react-router-dom";

import "./hamburger.scss";


class Hamburger extends React.Component{
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
      <div className = {`hamburger ${(this.state.isHamburgerClicked? "cross" : "")}`}
      onClick = {this.toogleHamburger}>
      <span></span>
      <span></span>
      <span></span>
    </div>

    )


  }
}

export default Hamburger;
