import React from 'react';
import BookList from '../BookList/BookList'
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  filter: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 20,
  },
}));

const SearchResults = (props) => {

  const classes = useStyles();

    return (
      <Container className={classes.filter}>
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