import React from 'react';
import Book from '../Book/Book';
import Container from '@material-ui/core/Container';

const BookList = (props) => {
  return (
    <Container>
        {props.books.map(book => {
          return <Book
            key={book.id}
            book={book}
            onEdit={props.onEdit}
            onDelete={props.onDelete}
            isRemoval={props.isRemoval}
          />;
        })
      }
    </Container>
  );
}


export default BookList;
