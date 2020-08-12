import React, {Component} from 'react';
import './app.less';
import {Route, BrowserRouter, Switch} from "react-router-dom";
import Home from "./Home/Home";
import Calculator from "./Calculator/Calculator";
import Countdown from "./Countdown/Countdown";
import Nav from './Nav/Nav'

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Nav></Nav>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/calculator' component={Calculator}/>
            <Route exact path='/countdown' component={Countdown}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
