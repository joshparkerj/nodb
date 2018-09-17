import React, {Component} from 'react';
import './week.css';
import Day from './Day.js';
import WeekHeading from './WeekHeading.js';

class Week extends Component {
  constructor(props){
    super(props);
    const day = (props && props.date) ? props.date : new Date();
    const whStyle = (props && props.whStyle) ? props.whStyle : 'long';
    const heading = (props && props.heading && props.heading === 'none') ?
      '' : (<WeekHeading whStyle={whStyle}/>);
    const days = [];
    while (day.getDay() > 0){
      day.setDate(day.getDate()-1);
    }
    while (days.length < 7){
      days.push(new Date(day));
      day.setDate(day.getDate()+1);
    }
    this.state = {
      days: days,
      day: day,
      heading: heading
    }
  }

  render() {
    return (
      <div className="week">
        { this.state.heading }
        {
          this.state.days.map((e,i) => {
            return (
              <Day date={e} key={i}/>
            );
          })
        }
      </div>
    )
  }
}

export default Week;
