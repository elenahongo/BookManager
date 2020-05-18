import React from 'react';
//import { Link } from 'react-router-dom';
//import Pagination from '@material-ui/lab/Pagination';
//import PaginationItem from '@material-ui/lab/PaginationItem';

const Pagination = ({booksPerPage, totalBooks, paginate}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++){
    pageNumbers.push(i)
  }

  return (
   <div>
     <ul>
       {pageNumbers.map(number => (
        <li key={number}>
          <a onClick={()=>paginate(number)} href='!#'>
            {number}
          </a>
        </li>
       ))}
       
     </ul>
   </div>
  )
}

export default Pagination