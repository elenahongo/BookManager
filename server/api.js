const express = require('express');
const apiRouter = express.Router();

const booksRouter = require('./books');
const listsRouter = require('./lists');

apiRouter.use('/books', booksRouter);
apiRouter.use('/lists', listsRouter);

module.exports = apiRouter;