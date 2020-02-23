import React from 'react';
import axios from 'axios';
import './container.scss';




class UsersContainer extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            users:{}
        }


        axios.get(`/users`)
          .then(res => {
              this.setState({
                users: res.data
              })
            })
    }



 
  render(){
    return (
      <div className="container" > 
          {Array.from(Object.keys(this.state.users)).map(name =>(
            <div key={name}>
              <h2>{name}</h2>
              {Array.from(Object.keys(this.state.users[name])).map(attribute => (
                <div key={attribute}>
                  <h3>{attribute}</h3>
                  <div>{this.state.users[name][attribute]}</div>
                </div>
                
              ))}
            </div>
          ))}
      </div>
    );
  }
}


export default UsersContainer;