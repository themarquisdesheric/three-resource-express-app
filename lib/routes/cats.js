const Router = require('express').Router;
const router = Router();
const Cat = require('../models/cat');

router
  .get('/', (req, res, next) => {
    Cat.find()
      .then(cats => res.send(cats))
      .catch(next);
  })

  .post('/', (req, res, next) => {
    new Cat(req.body)
      .save()
      .then(cat => res.send(cat))
      .catch(next);
  });

module.exports = router;

