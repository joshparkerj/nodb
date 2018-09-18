import React, { Component } from 'react';
import './add-event.css';
import { createEvent } from '../data/api.js';
import { ToastContainer, toast } from 'react-toastify';

class AddEvent extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
      date: 0,
      time: 0
    }
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
  }

  handleClick = () => {
    createEvent(this.state);
    toast.success("Thank you!", {
      position: toast.POSITION.TOP_CENTER
    });
  }

  render(){
    return (
      <div className="add-event">
        <ToastContainer />
        <label>Name:</label>
        <input name="name" onChange={this.handleChange}/><br/>
        <label>Date:</label>
        <input name="date" onChange={this.handleChange}/><br/>
        <label>Time:</label>
        <input name="time" onChange={this.handleChange}/><br/>
        <button onClick={this.handleClick}>submit</button>
      </div>
    )
  }
}

export default AddEvent;