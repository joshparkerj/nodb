import axios from 'axios';

const API_ADDRESS = 'http://localhost:8080/events';

export function createEvent(Event){
  axios.post(API_ADDRESS, {
    name: Event.name,
    date: new Date(`${Event.date} ${Event.time}`)
  })
    .then(res => {
      return res.data.id;
    })
    .catch(err => {
      console.error(err);
    })
}

export function readEvent(date){
  axios.get(`${API_ADDRESS}/${date.valueOf()}`)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.error(err);
    })
}

export function updateEvent(name, date, id){
  axios.put(`${API_ADDRESS}/${id}`, {
    name: name,
    date: date
  })
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.error(err);
    })
}

export function deleteEvent(id){
  axios.delete(`${API_ADDRESS}/${id}`)
    .then(res => {
      return res.data();
    })
    .catch(err => {
      console.error(err);
    })
}
