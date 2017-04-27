const Router = require('express').Router;
const router = Router();

router
  .get('/api/cars', (req, res) => {
    res.send([]);
  })

  .post('/api/cars', ( ) => {

  });

module.exports = router;