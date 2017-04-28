const Router = require('express').Router;
const router = Router();
const Car = require('../models/car');

router
  .get('/', (req, res) => {
    Car.find()
      .then(cars => res.send(cars));
  })

  .get('/:id', (req, res) => {
    Car.findById(req.params.id)
      .then(car => res.send(car));
  })

  .post('/', (req, res) => {
    new Car(req.body)
      .save()
      .then(car => res.send(car));
  })

  .delete('/:id', (req, res) => {
    Car.findByIdAndRemove(req.params.id)
      .then(response => res.send({ removed: !!response }));
  });

module.exports = router;