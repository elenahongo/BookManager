import React, { Component } from 'react';
import BookList from '../BookList/BookList'

const SearchResults = (props) => {
    return (
      <div>
          <h2>Books</h2>
          <BookList
            books={props.books}
            onEdit={props.onEdit}
            onDelete={props.onDelete}
            isRemoval={true}
          />
      </div>
    )
}

export default SearchResults