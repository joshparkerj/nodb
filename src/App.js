import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Year from './views/Year.js';
import Month from './views/Month.js';
import Week from './views/Week.js';
import Day from './views/Day.js';
import AddEvent from './views/AddEvent.js';
import ModifyEvents from './views/ModifyEvents.js';
import UpdateEvent from './views/UpdateEvent.js';
import { readEvent } from './data/api.js'

class App extends Component {
  constructor(){
    super();
    const day = new Date();
    this.state = {
      day: day,
      date: day,
      events: []
    }
  }

  handleChange = event => {
    const theDay = new Date(event.target.value);
    this.setState({date: theDay});
  }

  handleClick = () => {
    const d = new Date(this.state.date);
    d.setDate(d.getDate()+1);
    console.log(d);
    this.setState({day: d});
    readEvent()
      .then(res => {
        this.setState({events: res});
      })
      .catch(err => {
        console.error(err);
      })
  }

  render() {
    return (
      <div className="app">
        <div className="app-heading">
          <ul>
            <li><a href="/year">Year</a></li>
            <li><a href="/month">Month</a></li>
            <li><a href="/week">Week</a></li>
            <li><a href="/day">Day</a></li>
          </ul>
          <ul>
            <li><a href="/addevent">Add Event</a></li>
            <li><a href="/modifyevents">Modify Events</a></li>
          </ul>
          <label>date to display:</label>
          <input
            name="date"
            type="date"
            onChange={this.handleChange}
            value={this.state.date.toJSON().slice(0,10)}
          />
          <button onClick={this.handleClick}>View date</button>
        </div>
        <Router>
          <Switch>
            <Route
              path='/year'
              render={(props) => <Year {...props}
                date={this.state.day}
                events={this.state.events}
              />}
            />
            <Route
              path='/month'
              render={(props) => <Month {...props}
                date={this.state.day}
                events={this.state.events}
              />}
            />
            <Route
              path='/week'
              render={(props) => <Week {...props}
                date={this.state.day}
                events={this.state.events}
              />}
            />
            <Route
              path='/day'
              render={(props) => <Day {...props}
                date={this.state.day}
                events={this.state.events}
              />}
            />
            <Route path='/addevent' component={AddEvent}/>
            <Route path='/modifyevents' component={ModifyEvents}/>
            <Route path='/updateevent/:id' component={UpdateEvent}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
