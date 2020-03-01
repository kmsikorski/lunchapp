import React from "react";
import axios from "axios";
import "./container.scss";

class RestaurantsContainer extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      restaurants:{}
    };
    axios.get("/restaurants")
      .then(res => {
        this.setState({
          restaurants: res.data
        });
      });
  }

  render(){
    return (
      <div className="container" > 
        {Array.from(Object.keys(this.state.restaurants)).map(place =>(
          <div key={place}>
            <h2>{place}</h2>
            <div> price: {this.state.restaurants[place]["price"]}</div>
            <div> rating:{this.state.restaurants[place]["rating"]}</div>
            <div> cuisine: {this.state.restaurants[place]["cuisine"]}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default RestaurantsContainer;