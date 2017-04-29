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

});


