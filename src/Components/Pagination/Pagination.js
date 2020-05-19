import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const PaginationLinks = ({booksPerPage, totalBooks, paginate}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++){
    pageNumbers.push(i)
  }

  const handleChange = (event, value) => {
    paginate(value);
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
     <Pagination 
        color="primary" 
        count={pageNumbers.length} 
        onChange={handleChange}
      />
    </div>
  )
}

export default PaginationLinks