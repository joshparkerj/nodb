import React from 'react';
import './week-heading.css';

const names = ['Sunday',
               'Monday',
               'Tuesday',
               'Wednesday',
               'Thursday',
               'Friday',
               'Saturday'];

function WeekHeading(props){
  return (
    <div className="week-heading">
      {
        names.map((e,i) => {
          return (
            <div key={i}><h4>{e}</h4></div>
          );
        })
      }
    </div>
  )
}

export default WeekHeading;
