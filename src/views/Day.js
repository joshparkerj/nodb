import React from 'react';
import './day.css';

function Day(props){
  return (
    <div className="day">
      <h4>{props.date ? props.date.getDate() : new Date().getDate()}</h4>
    </div>
  )
}

export default Day;