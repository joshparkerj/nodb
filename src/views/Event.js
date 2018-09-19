import React, { Component } from 'react';
import './event.css';
import { readEvent, updateEvent, deleteEvent } from '../data/api.js';
import { ToastContainer, toast } from 'react-toastify';
import DisplayEvent from './DisplayEvent';

class Event extends Component {
  constructor(){
    super();
    this.state = {
      updateEvent: {
        name: '',
        date: 0,
        time: 0
      },
      currentEvents: [],
      name: '',
      date: 0,
      time: 0,
      loadDate: 0
    }
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
  }

  handleLoad = () => {
    const d = new Date(this.state.loadDate);
    console.log(d);
    const correctedDate = d.setMinutes(d.getMinutes() + d.getTimezoneOffset());
    readEvent(new Date(correctedDate))
      .then(res => {
        this.setState({currentEvents: res});
      })
      .catch(err => {
        console.error(err);
      })
  }

  handleUpdate = () => {
    if (this.state.currentEvents.length){
      updateEvent({
        name: this.state.name,
        date: this.state.date,
        time: this.state.time
      },this.state.currentEvents[0].id);
      toast.success("Thank you!", {
        position: toast.POSITION.TOP_CENTER
      });
    }else{
      toast.error("Load an event first!", {
        position: toast.POSITION.TOP_CENTER
      })
    }
  }

  render(){
    return (
      <div className="event">
        <ToastContainer />
        <div className="load-event">
          <label>Date:</label>
          <input name="loadDate" type="date" onChange={this.handleChange}/>
          <button onClick={this.handleLoad}>LOAD</button>
        </div>
        <div className="display-events">
          {this.state.currentEvents.map((e,i) => {
            return (
              <DisplayEvent event={e} key={i} />
            )
          })}
        </div>
        <div className="update-event">
          <h4>Edit this event:</h4>
          <label>Name:</label>
          <input name="name" onChange={this.handleChange}/><br/>
          <label>Date:</label>
          <input name="date" type="date" onChange={this.handleChange}/><br/>
          <label>Time:</label>
          <input name="time" onChange={this.handleChange}/><br/>
          <button onClick={this.handleUpdate}>UPDATE</button>
        </div>
      </div>
    )
  }
}

export default Event;