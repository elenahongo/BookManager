import React from 'react';
import Pagination from '@material-ui/lab/Pagination';

const PaginationLinks = ({booksPerPage, totalBooks, paginate}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++){
    pageNumbers.push(i)
  }

  const handleChange = (event, value) => {
    paginate(value);
  };

  return (
     <Pagination 
        count={pageNumbers.length} 
        onChange={handleChange}
      />
  )
}

export default PaginationLinks