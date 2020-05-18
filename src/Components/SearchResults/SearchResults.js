import React, { useState, useEffect } from 'react';
import BookList from '../BookList/BookList'
import Container from '@material-ui/core/Container';

const SearchResults = (props) => {

  // const [currentPage, setCurrentPage] = useState(1);
  // const [booksPerPage, setBooksPerPage] = useState(5);


    return (
      <Container>
          <h2>Books</h2>
          <BookList
            books={props.books}
            onEdit={props.onEdit}
            onDelete={props.onDelete}
            isRemoval={true}
          />
      </Container>
    )
}

export default SearchResults