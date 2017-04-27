const db = require('./_db');
const request = require('./_request');
const assert = require('chai').assert;

describe('cars API', () => {

  before(db.drop);

  it('initial GET request returns empty array', () => {
    return request.get('/api/cars')
      .then(req => req.body)
      .then(cars => assert.deepEqual(cars, []));
  });
});