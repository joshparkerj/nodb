import React, {Component} from 'react';
import './year.css';
import Month from './Month.js';

class Year extends Component {
  constructor(){
    super();
    const year = this.props ?
                 this.props.date.getFullYear() || new Date().getFullYear() :
                 new Date().getFullYear();
    this.state = {
      days: [],
      day: new Date(year,0),
      year: year
    }
    while (this.state.day.getFullYear() === this.state.year){
      this.state.days.push(new Date(this.state.day));
      this.state.day.setMonth(this.state.day.getMonth()+1);
    }
  }

  render() {
    return (
      <div className="year">
        <div><h4>{this.state.year}</h4></div>
        <div className="calendar">
          {
            this.state.days.map(e => {
                return (
                  <Month date={e}/>
                );
            })
          }
        </div>
      </div>
    )}
}

export default Year;
