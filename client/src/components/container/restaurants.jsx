import React from 'react';
import axios from 'axios';
import './container.scss';




class RestaurantsContainer extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            restaurants:{}
        }


        axios.get(`/restaurants`)
          .then(res => {
              this.setState({
                restaurants: res.data
              })
            })
    }



 
  render(){
    return (
      <div className="container" > 
          {Array.from(Object.keys(this.state.restaurants)).map(place =>(
            <div key={place}>
              <h2>{place}</h2>
              {Array.from(Object.keys(this.state.restaurants[place])).map(attribute => (
                <div key={attribute}>
                  <h3>{attribute}</h3>
                  <div>{this.state.restaurants[place][attribute]}</div>
                </div>
                
              ))}
            </div>
          ))}
      </div>
    );
  }
}


export default RestaurantsContainer;