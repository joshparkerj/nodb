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
    const whStyle = (props && props.whStyle) ? props.whStyle : 'long';
    const day = (props && props.date) ? props.date : new Date();
    day.setDate(1);
    const month = day.getMonth();
    const days = [];
    while (days.length < 6) {
      days.push(new Date(day));
      day.setDate(day.getDate()+7);
    }
    this.state = {
      days: days,
      day: day,
      month: month,
      whStyle: whStyle
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
                <Week date={e} whStyle={this.state.whStyle} key = {i}/>
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
