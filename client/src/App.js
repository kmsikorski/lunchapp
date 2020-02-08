import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    getData()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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

function getData() {
// create a new XMLHttpRequest
var xhr = new XMLHttpRequest()

// get a callback when the server responds
xhr.addEventListener('load', () => {
  // update the state of the component with the result here
  console.log(xhr.responseText)
})
// open the request with the verb and the url
xhr.open('GET', 'http://localhost:5000/users')
// send the request
xhr.send()
}

export default App;
