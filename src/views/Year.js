import React, {Component} from 'react';
import './year.css';
import Month from './Month.js';

class Year extends Component {
  constructor(props){
    super(props);
    const year = (props && props.date) ?
                 props.date.getFullYear() :
                 new Date().getFullYear();
    const days = [];
    const day = new Date(year,0);
    while (day.getFullYear() === year){
      days.push(new Date(day));
      day.setMonth(day.getMonth()+1);
    }
    this.state = {
      days: days,
      day: day,
      year: year
    }
  }

  render() {
    return (
      <div className="year">
        <div><h4>{this.state.year}</h4></div>
        <div className="calendar">
          {
            this.state.days.map((e,i) => {
                return (
                  <Month date={e} whStyle="short" key={i}/>
                );
            })
          }
        </div>
      </div>
    )}
}

export default Year;
