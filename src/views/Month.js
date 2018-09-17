import React, {Component} from 'react';
import './month.css';
import Week from './Week.js';

const names = ['January',
               'February',
               'March',
               'April',
               'May',
               'June',
               'July',
               'August',
               'September',
               'October',
               'November',
               'December'];

class Month extends Component {
  constructor(props){
    super(props);
    const day = (props && props.date) ? props.date : new Date();
    const month = day.getMonth();
    const days = [];
    while (day.getMonth() === month){
      day.setDate(day.getDate()-7);
    }
    do {
      days.push(new Date(day));
      day.setDate(day.getDate()+7);
    }
    while (day.getMonth() === month ||
           day.getDate() - day.getDay() < 7);
    this.state = {
      days: days,
      day: day,
      month: month
    }

  }

  render() {
    return (
      <div className="month">
        <div><h4>{names[this.state.month]}</h4></div>
        {
          this.state.days.map((e,i) => {
            if (i===0){
              return (
                <Week date={e} key = {i}/>
              )
            }
            return (
              <Week date={e} key={i} heading="none"/>
            );
          })
        }
      </div>
    )
  }
}

export default Month;
