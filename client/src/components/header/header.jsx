import React from "react";
import "./header.scss";
import Nav from "./nav/nav.jsx";

function Header(){
  return(
    <header>
      <div id="page-name">
        <h1>LunchApp</h1>
      </div>
      <Nav/>
    </header>
  );
}

export default Header;