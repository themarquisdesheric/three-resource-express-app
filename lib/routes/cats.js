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
    
  });

module.exports = router;


