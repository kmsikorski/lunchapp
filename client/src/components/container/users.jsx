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
            <div>{this.state.users[name]['role']}</div>
            <div>{this.state.users[name]['password']}</div>
          </div>
        ))}
      </div>
    );
  }
}


export default UsersContainer;