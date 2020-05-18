const express = require('express');
const apiRouter = express.Router();

const booksRouter = require('./books');
const listsRouter = require('./lists');
const filterRouter = require('./filter')

apiRouter.use('/books', booksRouter);
apiRouter.use('/lists', listsRouter);
//apiRouter.use('/filter', filterRouter);

module.exports = apiRouter;