const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const events = require('./events');

app.use(bodyParser.json());
app.use(cors({origin: ['http://localhost:3000']}));

app.use(express.static('./build'));
app.get('/',(req,res) => {
  res.sendFile('./build/index.html');
})

app.get('/all-events/', (req,res) => {
  res.send(events.readEvent());
})

app.get('/events', (req,res) => {
  res.send(events.eventById(req.query.id));
})

app.delete('/events/:id', (req,res) => {
  res.status(events.deleteEvent(Number(req.params.id)) ? 200 : 404).send();
})

app.post('/events', (req,res) => {
  const date = new Date(req.body.date);
  res.send(events.createEvent({
    name: req.body.name,
    time: date.toLocaleTimeString(),
    date: date.toDateString()
  }));
})

app.put('/events/:id', (req,res) => {
  const Event = events.updateEvent(req.body,Number(req.params.id));
  if (Event){
    res.status(200).send(Event);
  }else{
    res.status(404).send();
  }
})

app.listen(process.env.PORT || 8080);
