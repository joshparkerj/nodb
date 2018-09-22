import React from 'react';
import './display-event.css';

function handleClick(id, hd){
  hd(id);
}

function DisplayEvent(props) {
  return (
    <div className="display-event">
      <h4>{props.event.name}</h4>
      <p>{props.event.date}</p>
      <p>{props.event.time}</p>
      <div className="event-modifiers">
        <button onClick={e => handleClick(props.event.id,props.handleDelete)}>
          delete this event
        </button>
        <a href={`/updateevent/${props.event.id}`}>
          <button>update this event</button>
        </a>
      </div>
    </div>
  )
}

export default DisplayEvent;