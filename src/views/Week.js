import React, {Component} from 'react';
import './week.css';
import Day from './Day.js';
import WeekHeading from './WeekHeading.js';

class Week extends Component {
  constructor(props){
    super(props);
    const day = (props && props.date) ? props.date : new Date();
    const heading = (props && props.heading && props.heading === 'none') ?
      '' : (<WeekHeading />);
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
/*
  componentDidMount(){
    if (this.props && this.props.date){
      this.state.day.setFullYear(this.props.date.getFullYear());
      this.state.day.setMonth(this.props.date.getMonth());
      this.state.day.setDate(this.props.date.getDate());
      if (this.props.heading && this.props.heading === 'none'){
        this.state.heading = '';
      }
    }
    this.setWeekDays();
    this.setState(this.state);
  }

  setWeekDays = () => {
    this.state.days.splice(0);
    while (this.state.day.getDay() > 0){
      this.state.day.setDate(this.state.day.getDate()-1);
    }
    while (this.state.days.length < 7){
      this.state.days.push(new Date(this.state.day));
      this.state.day.setDate(this.state.day.getDate()+1);
    }
  }
*/
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
