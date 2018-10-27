const events = require('./events');

let testEventId;

beforeEach(() => {
  return new Promise(r => setTimeout(r,100));
})

describe('createEvent', () => {
  it('returns a new event id', () => {
    events.createEvent({test: 'just a test'})
    .then(r => {
      testEventId = r.id
      expect(testEventId).toBeDefined();
    })
  })
})

describe('readEvent', () => {
  it('returns a list and the last element is the test event', () => {
    const e = events.readEvent();
    expect(e[e.length-1].test).toBe('just a test');
  })
})

describe('eventById', () => {
  it('returns the test event when given testEventId', () => {
    const e = events.eventById(testEventId);
    expect(e[0].test).toBe('just a test');
  })
})

describe('updateEvent', () => {
  it('changes the test event', () => {
    const e = {testing: 'another test'};
    events.updateEvent(e,testEventId)
    .then(r => {
      expect(r).toHaveProperty('testing','another test');
    })
  })
})

describe('deleteEvent', () => {
  it('deletes the test event when given testEventId', () => {
    events.deleteEvent(testEventId)
    .then(r => {
      expect(r).toBe(true);
    })
  })
})
