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

  let testCat = { name: 'Frank', legs: 4, siblings: 'Arthur' };

  it('POST should add document to database', () => {
    return request.post('/api/cats')
      .send(testCat)
      .then(res => res.body)
      .then(res => assert.ok(res._id));
  });

});