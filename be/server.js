// server.js
// 9/17/2018

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const events = require('./events');

app.use(bodyParser.json());
app.use(cors({origin: ['http://localhost:3000']}));

app.get('/health', (req,res) => {
  res.send('ok');
  console.log('health check ok');
})

app.get('/events/:date', (req,res) => {
  const date = new Date(Number(req.params.date));
  res.send(events.readEvent(date.toDateString()));
})

app.get('/events', (req,res) => {
  const id = req.query.id;
  res.send(events.eventById(id));
})

app.delete('/events/:id', (req,res) => {
  if (events.deleteEvent(Number(req.params.id))){
    res.status(200).send();
  }else{
    res.status(404).send();
  }
})

app.post('/events', (req,res) => {
  const date = new Date(req.body.date);
  const Event = {
    name: req.body.name,
    time: date.toLocaleTimeString(),
    date: date.toDateString()
  }
  res.send(events.createEvent(Event));
})

app.put('/events/:id', (req,res) => {
  console.log('tryna update event...');
  console.log(req.body);
  const Event = events.updateEvent(req.body,Number(req.params.id));
  if (Event){
    res.status(200).send(Event);
  }else{
    res.status(404).send();
  }
})

app.listen(8080, function(){
  console.log(`http://localhost:${this.address().port}`);
})