process.env.MONGODB_URI = 'mongodb://localhost:27017/cars-test';
require('../../lib/connect');

const connection = require('mongoose').connection;

module.exports = {
  drop() {
    return connection.dropDatabase();
  }
};
