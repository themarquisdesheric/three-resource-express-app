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

  it('roundtrips a new car', () => {

    let mustang = { make: 'Ford', model: 'Mustang' };
    
    function saveCar(car) {
      return request
      .post('/api/cars')
      .send(car)
      .then(res => res.body);
    }

    saveCar(mustang)
      .then(saved => {
        assert.ok(saved._id, 'saved car has an id');

        mustang = saved;
      })
      .then(() => request.get(`/api/cars/${mustang._id}`))
      .then(res => res.body)
      .then(got => {
        assert.deepEqual(got, mustang);
      });
  });

});