import React from 'react';
import './app.css';
import Header from './header/header.js'

class App extends React.Component {

  componentDidMount(){
    fetch('http://localhost:5000/users')
    .then((response) => {
      console.log("odpowiedz", response.json()) ;
    });
    }

  
  render(){
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
