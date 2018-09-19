import React, { Component } from 'react';
import './display-event.css';

class DisplayEvent extends Component {

  handleClick = () => {
    this.props.handleDelete(this.props.event.id);
  }

  render(){
    return (
      <div className="display-event">
        <h4>{this.props.event.name}</h4>
        <p>{this.props.event.date}</p>
        <p>{this.props.event.time}</p>
        <div className="event-modifiers">
          <button onClick={this.handleClick}>
            delete this event
          </button>
          <a href={`/updateevent/${this.props.event.id}`}>
            <button>update this event</button>
          </a>
        </div>
      </div>
    )
  }
}

export default DisplayEvent;