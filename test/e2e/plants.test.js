const db = require('./_db');
const request = require('./_request');
const assert = require('chai').assert;

describe('plants API', () => {

  before(db.drop);

  it('initial get request should return empty array', () => {
    return request.get('/api/plants')
      .then(res => res.body)
      .then(plants => assert.deepEqual(plants, []));
  });

  let maranta = { type: 'Maranta', variety: 'prayer plant', leafy: true };

  it('POST should add a plant to database', () => {

    return request.post('/api/plants')
      .send(maranta)
      .then(res => res.body)
      .then(saved => {
        assert.ok(saved._id);
        
        maranta = saved;
      });
  });

});


