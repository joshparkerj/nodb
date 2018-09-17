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
  constructor(){
    super();
    this.state = {
      days: [],
      day: new Date(),
      month: new Date().getMonth()
    }
  }

  componentDidMount(){
    if (this.props && this.props.date){
      this.state.day.setFullYear(this.props.date.getFullYear());
      this.state.day.setMonth(this.props.date.getMonth());
      this.state.day.setDate(this.props.date.getDate());
      this.state.month = this.state.day.getMonth();
    }
    this.setStateDays();
    this.setState(this.state);
  }

  setStateDays(){
    this.state.days.splice(0);
    while (this.state.day.getMonth() === this.state.month){
      this.state.day.setDate(this.state.day.getDate()-7);
    }
    do {
      this.state.days.push(new Date(this.state.day));
      this.state.day.setDate(this.state.day.getDate()+7);
    }
    while (this.state.day.getMonth() === this.state.month ||
           this.state.day.getDate() - this.state.day.getDay() < 7);
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
