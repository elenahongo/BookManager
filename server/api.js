const express = require('express');
const apiRouter = express.Router();

const booksRouter = require('./books');
const filterRouter = require('./filter')

apiRouter.use('/books', booksRouter);
//apiRouter.use('/filter', filterRouter);

module.exports = apiRouter;