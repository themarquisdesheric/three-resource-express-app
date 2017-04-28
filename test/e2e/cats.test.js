const db = require('./_db');
const request = require('./_request');
const assert = require('chai').assert;

describe('cats API', () => {
  before(db.drop);

  it('initial GET should return empty array', () => {
    return request.get('/api/cats')
      .then(res => res.body)
      .then(result => assert.deepEqual(result, []));
  });

  let frank = { name: 'Frank', legs: 4, siblings: 'Arthur' };

  it('POST should add document to database', () => {
    return request.post('/api/cats')
      .send(frank)
      .then(res => res.body)
      .then(saved => {
        assert.ok(saved._id);

        frank = saved;
      });
  });

  it('GET should return a cat', () => {
    return request.get('/api/cats')
      .then(res => res.body)
      .then(cats => assert.equal(cats.length, 1));
  });

});