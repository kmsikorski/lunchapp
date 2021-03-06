import React from "react";
import "./app.css";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Header from "./header/header.jsx";
import Footer from "./footer/footer.jsx";
import LunchesContainer from "./container/lunches.jsx";
import RestaurantsContainer from "./container/restaurants.jsx";
import UsersContainer from "./container/users.jsx";

class App extends React.Component {
  
  render(){
    return (
      <BrowserRouter >
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={LunchesContainer} />
            <Route exact path="/restaurants" component={RestaurantsContainer} />
            <Route exact path="/lunches" component={LunchesContainer} />
            <Route exact path="/users" component={UsersContainer} />
          </Switch>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;