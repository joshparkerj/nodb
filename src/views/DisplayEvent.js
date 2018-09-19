import React from 'react';
import './display-event.css';

function DisplayEvent(props){
  return (
    <div className="display-event">
      <h4>{props.event.name}</h4>
      <p>{props.event.date}</p>
      <p>{props.event.time}</p>
    </div>
  )
}

export default DisplayEvent;