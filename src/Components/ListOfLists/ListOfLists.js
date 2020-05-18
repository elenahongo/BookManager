import React from 'react';
import {Container, Box, Button, Link} from '@material-ui/core';

const ListOfLists = (props) => {

  const onDeleteList = (id) => {
    props.onDelete(id);
  }
  const onFilterList = (id) => {
    props.onFilter(id);
  }

  return (
    <Container>
      {props.lists.map(list => {
        console.log(list)
        return <Box
          key={`listid${list.id}`}
          >
          <Link href="#" onClick={onFilterList.bind(this, list.id)}>
          {list.title}
          </Link>
          <Button 
            variant="contained"
            type='submit'
            color="primary"
            onClick={onDeleteList.bind(this, list.id)}  
          >Delete</Button>
          </Box>
      })
      }
    </Container>
  );
}

export default ListOfLists