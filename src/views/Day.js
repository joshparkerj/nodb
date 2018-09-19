import React, { Component } from 'react';
import './day.css';
import { readEvent } from '../data/api.js';
import DisplayEvent from './DisplayEvent';


class Day extends Component{

  constructor(props){
    super(props);
    const day = (props && props.date) ? props.date : new Date();
    this.state = {
      currentEvents: [],
      date: day
    }
  }

  componentDidMount(){
    this.handleLoad();
  }

  handleLoad = () => {
    readEvent(this.state.date)
      .then(res => {
        this.setState({currentEvents: res});
      })
      .catch(err => {
        console.error(err);
      })
  }

  render(){
    return (
      <div
        className={
          `day ${this.state.currentEvents.length > 0 ? 'eventful': ''}`
        }
      >
        <h4>
          {this.props.date ? this.props.date.getDate() : new Date().getDate()}
        </h4>
        <div className="display-events">
          {this.state.currentEvents.map((e,i) => {
            return (
              <DisplayEvent
                event={e}
                key={i}
                handleDelete={this.handleDelete}
              />
            )
          })}
        </div>
      </div>
    )
  }
}

export default Day;