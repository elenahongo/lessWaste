const express = require('express');
const apiRouter = express.Router();

const recipesRouter = require('./recipes');
const filterRouter = require('./filter')

apiRouter.use('/recipes', recipesRouter);
apiRouter.use('/filter', filterRouter);

module.exports = apiRouter;