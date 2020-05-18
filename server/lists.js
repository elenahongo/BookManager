const express = require('express');
const listsRouter = express.Router();

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database(process.env.TEST_DATABASE || './database.sqlite');

module.exports = listsRouter
//const timesheetsRouter = require('./timesheets.js');
//listsRouter.use('/:bookId/timesheets', timesheetsRouter);

listsRouter.param('listId', (req, res, next, listId) => {
  const sql = 'SELECT * FROM lists WHERE lists.id = $listId';
  const values = {$listId: listId};
  db.get(sql, values, (error, list) => {
    if (error) {
      next(error);
    } else if (list) {
      req.book = list;
      next();
    } else {
      res.sendStatus(404);
    }
  });
});

//GET requests
listsRouter.get('/', (req, res, next) => {
  db.all('SELECT * FROM lists ORDER BY lists.id DESC',
    (err, lists) => {
      if (err) {
        next(err);
      } else {
        res.status(200).json({lists: lists});
      }
    });
});

listsRouter.get('/:bookId', (req, res, next) => {
  res.status(200).json({book: req.book});
});

//POST requests
listsRouter.post('/', (req, res, next) => {
  const title = req.body.title,
        books = req.body.books;
  if (!title || !books ) {
    return res.sendStatus(400);
  }

  const sql = 'INSERT INTO lists (title, books) ' +
      'VALUES ($title, $books)';
  const values = {
    $title: title,
    $books: books,
  };

  db.run(sql, values, function(error) {
    if (error) {
      next(error);
    } else {
      db.get(`SELECT * FROM lists WHERE lists.id = ${this.lastID}`,
        (error, list) => {
          res.status(201).json({list: list});
        });
    }
  });
});

listsRouter.put('/:bookId', (req, res, next) => {
  const name = req.body.book.name,
        position = req.body.book.position,
        wage = req.body.book.wage,
        isCurrentbook = req.body.book.isCurrentbook === 0 ? 0 : 1;
  if (!name || !position || !wage) {
    return res.sendStatus(400);
  }

  const sql = 'UPDATE book SET name = $name, position = $position, ' +
      'wage = $wage, is_current_book = $isCurrentbook ' +
      'WHERE book.id = $bookId';
  const values = {
    $name: name,
    $position: position,
    $wage: wage,
    $isCurrentbook: isCurrentbook,
    $bookId: req.params.bookId
  };

  db.run(sql, values, (error) => {
    if (error) {
      next(error);
    } else {
      db.get(`SELECT * FROM books WHERE book.id = ${req.params.bookId}`,
        (error, book) => {
          res.status(200).json({book: book});
        });
    }
  });
});

listsRouter.delete('/:listId', (req, res, next) => {
  const deleteSql = 'DELETE FROM lists WHERE lists.id = $listId';
  const deleteValues = {$listId: req.params.listId};

  db.run(deleteSql, deleteValues, (error) => {
    if (error) {
      next(error);
    } else {
      res.sendStatus(204);
    }
  });
});
