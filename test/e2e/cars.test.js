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

  let mustang = { make: 'Ford', model: 'Mustang' };

  it('roundtrips a new car', () => {
    return request
      .post('/api/cars')
      .send(mustang)
      .then(res => res.body)
      .then(saved => {
        assert.ok(saved._id, 'saved car has an id');

        mustang = saved;
      })

      .then(() => {
        return request.get(`/api/cars/${mustang._id}`);
      })
      .then(res => res.body)
      .then(got => {
        assert.deepEqual(got, mustang);
      });
  });

});