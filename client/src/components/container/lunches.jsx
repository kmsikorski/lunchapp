import React from 'react';
import axios from 'axios';
import './container.scss';

class LunchesContainer extends React.Component {

  constructor(props){
    super(props)
    this.state = {
        lunches:{}
    }
    axios.get('/lunches')
      .then(res => {
        this.setState({
          lunches: res.data
        })
      })
  }

  render(){
    return (
      <div className="container" > 
        {Array.from(Object.keys(this.state.lunches)).map(place =>(
          <div key={place}>
            <h2>{place}</h2>
            <div>{this.state.lunches[place]['soup']}</div>
            <div>{this.state.lunches[place]['main_course']}</div>
            <div>{this.state.lunches[place]['dessert']}</div>
            <div>{this.state.lunches[place]['price']}</div>
          </div>
        ))}
      </div>
    );
  }
};

export default LunchesContainer;