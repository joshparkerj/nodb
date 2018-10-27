const api = require('./api');

describe('api', () => {
  it('exists', () => {
    expect(api).toBeDefined();
  })
})

/*
// Testing an api call seems a lil tricky
// I'll come back to this after testing easier things
describe('createEvent', () => {
  it('returns an id number', () => {
    expect(api.createEvent({
      name: 'test',
      date: new Date(),
    })).resolves.toThrow();
})});
*/

