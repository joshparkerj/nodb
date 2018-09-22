import axios from 'axios';

const API_ADDRESS = 'http://localhost:8080/events';

export function createEvent(Event){
  return axios.post(API_ADDRESS, {
    name: Event.name,
    date: new Date(`${Event.date} ${Event.time}`)
  })
    .then(res => {
      return res.data.id;
    })
    .catch(err => {
      console.error(err);
      return err;
    })
}

export function readEvent(){
  return axios.get('http://localhost:8080/all-events')
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.error(err);
      return err;
    })
}

export function eventById(id){
  return axios.get(`${API_ADDRESS}/?id=${id}`)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.error(err);
      return err;
    })
}

export function updateEvent(Event, id){
  return axios.put(`${API_ADDRESS}/${id}`, {
    name: Event.name,
    date: Event.date,
    time: `${Event.time}:00`
  })
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.error(err);
      return err;
    })
}

export function deleteEvent(id){
  return axios.delete(`${API_ADDRESS}/${id}`)
    .then(res => {
      return res.status;
    })
    .catch(err => {
      console.error(err);
      return err;
    })
}
