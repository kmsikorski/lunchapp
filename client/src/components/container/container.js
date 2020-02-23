import React from 'react';
import axios from 'axios';
import './container.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



class Container extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            data:{},
            resource:"",

        }
    }


    shouldComponentUpdate(nextProps){
      if (nextProps.match.params.resource !== this.props.match.params.resource){
        const {match: {params}} = nextProps;
        axios.get(`/${params.resource.toLowerCase()}`)
          .then(res => {
              this.setState({
                  data: res.data,
                  resource: params.resource.toLowerCase()
              })
          }
        );
      }
      return true;
    }

 
  render(){
    return (
      <div className="container" > 
          {Array.from(Object.keys(this.state.data)).map(dataLabel =>(
            <div key={dataLabel}>
              <h2>{dataLabel}</h2>
              {Array.from(Object.keys(this.state.data[dataLabel])).map(meal => (
                <div key={meal}>
                  <h3>{meal}</h3>
                  <div>{this.state.data[dataLabel][meal]}</div>
                </div>
                
              ))}
            </div>
          ))}
      </div>
    );
  }
}


export default Container;