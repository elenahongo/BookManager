import React from 'react';
import BookList from '../BookList/BookList'
import Container from '@material-ui/core/Container';

const SearchResults = (props) => {

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