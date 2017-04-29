const Router = require('express').Router;
const router = Router();
const Plant = require('../models/plant');

router
  .get('/', (req, res, next) => {
    Plant.find()
      .then(plants => res.send(plants))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    Plant.findById(req.params.id)
      .then(plant => res.send(plant))
      .catch(next);
  })

  .post('/', (req, res, next) => {
    new Plant(req.body)
      .save()
      .then(plant => res.send(plant))
      .catch(next);
  });

module.exports = router;