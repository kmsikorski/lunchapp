import React from 'react';
import axios from 'axios';


class Container extends React.Component {

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
        });
    }

 
  render(){
    return (
      <div className="container" >
          
          {Array.from(Object.keys(this.state.lunches)).map(place =>(
            <div key={place}>
              <h2>{place}</h2>
              {Array.from(Object.keys(this.state.lunches[place])).map(meal => (
                <div key={meal}>
                  <h3>{meal}</h3>
                  <div>{this.state.lunches[place][meal]}</div>
                </div>
                
              ))}
            </div>
          ))}
      </div>
    );
  }
}

export default Container;