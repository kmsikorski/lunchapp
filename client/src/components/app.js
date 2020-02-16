import React from 'react';
import './app.css';
import Header from './header/header.js'
import Footer from './footer/footer.js'
import Container from './container/container.jsx'

import axios from 'axios';


class App extends React.Component {
  
  render(){
    return (
      <div className="App">
        <Header />
        <Container />
        <Footer />
      </div>
    );
  }
}

export default App;
