const express = require('express');
const booksRouter = express.Router();

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database(process.env.TEST_DATABASE || './database.sqlite');

module.exports = booksRouter
//const timesheetsRouter = require('./timesheets.js');
//booksRouter.use('/:bookId/timesheets', timesheetsRouter);

booksRouter.param('bookId', (req, res, next, bookId) => {
  const sql = 'SELECT * FROM books WHERE books.id = $bookId';
  const values = {$bookId: bookId};
  db.get(sql, values, (error, book) => {
    if (error) {
      next(error);
    } else if (book) {
      req.book = book;
      next();
    } else {
      res.sendStatus(404);
    }
  });
});

//GET requests
booksRouter.get('/', (req, res, next) => {
  db.all('SELECT * FROM books ORDER BY books.id DESC',
    (err, books) => {
      if (err) {
        next(err);
      } else {
        res.status(200).json({books: books});
      }
    });
});

booksRouter.get('/:bookId', (req, res, next) => {
  res.status(200).json({book: req.book});
});

//POST requests
booksRouter.post('/', (req, res, next) => {
  const title = req.body.book.title,
        description = req.body.book.description,
        tags = req.body.book.tags,
        image = req.body.book.image
  if (!title || !description || !tags || !image) {
    return res.sendStatus(400);
  }

  const sql = 'INSERT INTO books (title, description, tags, image, date)' +
      'VALUES ($title, $description, $tags, $image, $date)';
  const values = {
    $title: title,
    $description: description,
    $tags: tags,
    $image: image,
    $date: JSON.stringify(new Date()),
  };

  db.run(sql, values, function(error) {
    if (error) {
      next(error);
    } else {
      db.get(`SELECT * FROM books WHERE books.id = ${this.lastID}`,
        (error, book) => {
          res.status(201).json({book: book});
        });
    }
  });
});

booksRouter.put('/:bookId', (req, res, next) => {
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

booksRouter.delete('/:bookId', (req, res, next) => {
  const deleteSql = 'DELETE FROM books WHERE books.id = $bookId';
  const deleteValues = {$bookId: req.params.bookId};

  db.run(deleteSql, deleteValues, (error) => {
    if (error) {
      next(error);
    } else {
      res.sendStatus(204);
    }
  });
});

