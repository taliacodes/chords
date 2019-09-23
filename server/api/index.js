const router = require('express').Router();

//for example
//router.use('./testingRouters', require('./testingRouters'))

router.use(function(req, res, next) {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});

module.exports = router;
