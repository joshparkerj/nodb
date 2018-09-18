import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Year from './views/Year.js';
import Month from './views/Month.js';
import Week from './views/Week.js';
import Day from './views/Day.js';
import AddEvent from './views/AddEvent.js';

class App extends Component {
  render() {
    return (
      <div className="app">
        <ul>
          <li><a href="/year">Year</a></li>
          <li><a href="/month">Month</a></li>
          <li><a href="/week">Week</a></li>
          <li><a href="/day">Day</a></li>
          <li><a href="/addevent">Add Event</a></li>
        </ul>
        <Router>
          <Switch>
            <Route path='/year' component={Year}/>
            <Route path='/month' component={Month}/>
            <Route path='/week' component={Week}/>
            <Route path='/day' component={Day}/>
            <Route path='/addevent' component={AddEvent}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
