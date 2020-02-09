import React from 'react';
import './app.css';

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
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
