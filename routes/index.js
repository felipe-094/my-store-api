const express = require('express');

const productsRouter = require('./products.routers');
const categoriesRouter = require('./categories.routers')
const usersRouter = require('./users.routers');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productsRouter);
  router.use('/categories', categoriesRouter);
  router.use('/users', usersRouter);
}

module.exports = routerApi;