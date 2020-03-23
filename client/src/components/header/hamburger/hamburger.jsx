import React from "react";
import PropTypes from "prop-types";
import "./hamburger.scss";

class Hamburger extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className = {`hamburger ${(this.props.isHamburgerClicked? "cross" : "")}`}
        onClick = {this.toogleHamburger}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    );
  }
}

Hamburger.propTypes = {
  isHamburgerClicked: PropTypes.bool,
};

export default Hamburger;
