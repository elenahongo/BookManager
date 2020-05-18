import React from 'react';
import {Container, Box, Button} from '@material-ui/core';

const ListOfLists = (props) => {

  const onDeleteList = (id) => {
    props.onDelete(id);
  }

  return (
    <Container>
      {props.lists.map(list => {
        console.log(list)
        return <Box
          key={list.id}
          >
          {list.title}
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