const fs = require('fs');
const data = require('./data.json');

function writeFile() {
  return new Promise((res, rej) => {
    fs.writeFile('./data.json', JSON.stringify(data), (err) => {
      if (err) rej(err);
      else res('ok');
    });
  });
}

function createEvent(Event) {
  const id = 1 + Math.max(...data.map((e) => e.id));
  data.push({ ...Event, id });
  return writeFile()
    .then(() => ({ id }));
}

function readEvent() {
  return data;
}

function eventById(id) {
  return data.filter((e) => Number(e.id) === Number(id));
}

function updateEvent(Event, id) {
  const E = data.find((e) => Number(e.id) === Number(id));
  if (E) {
    for (const i in Event) {
      E[i] = Event[i];
    }

    return writeFile()
      .then(() => E);
  }

  return null;
}

function deleteEvent(id) {
  const i = data.findIndex((e) => Number(e.id) === Number(id));
  if (i !== -1) {
    data.splice(i, 1);

    return writeFile()
      .then(() => true);
  }

  return false;
}

const events = {
  createEvent,
  readEvent,
  updateEvent,
  deleteEvent,
  eventById,
};

module.exports = events;
