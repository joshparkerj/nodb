const data = require('./data.json');
const fs = require('fs');

function createEvent(Event){
  const id = 1 + Math.max(...data.map(e => e.id));
  Event.id = id;
  data.push(Event);
  fs.writeFile('./data.json',JSON.stringify(data),err => {
    if(err){
      console.error(err);
      return err;
    }
  });
  return {id: id};
}

function readEvent(date){
  return data.filter(e => e.date === date);
}

function updateEvent(Event,id){
  const E = data.find(e => Number(e.id) === Number(id));
  if (E){
    for (i in Event){
      E[i] = Event[i];
    }
    fs.writeFile('./data.json',JSON.stringify(data),err => {
      if(err){
        console.error(err);
        return err;
      }
    });
    return E;
  }
  return null;
}

function deleteEvent(id){
  const i = data.findIndex(e => Number(e.id) === Number(id));
  if (i !== -1){
    data.splice(i,1);
    fs.writeFile('./data.json',JSON.stringify(data),err => {
      if(err){
        console.error(err);
        return err;
      }
    });
    return true;
  }
  return false;
}

const events = {};
events.createEvent = createEvent;
events.readEvent = readEvent;
events.updateEvent = updateEvent;
events.deleteEvent = deleteEvent;

module.exports = events;