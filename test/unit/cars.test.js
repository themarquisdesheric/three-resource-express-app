const assert = require('chai').assert;
const Car = require('../../lib/models/car');

describe('cars model', () => {

  it('validates make and model are required', () => {
    const car = new Car();
    
    return car.validate()
      .then(() => { throw new Error('Expected validation to fail'); },
      err => {
        const errors = err.errors;

        assert.ok(errors.make && errors.make.kind === 'required');
        assert.ok(errors.model && errors.model.kind === 'required');
      });
  });

});