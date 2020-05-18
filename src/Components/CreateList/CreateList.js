import React, { Component } from 'react';
import BookList from '../BookList/BookList'
import {Container, Button} from '@material-ui/core';

class CreateList extends Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  onDragOver (event) {
    event.preventDefault();
  }

  handleNameChange(ev) {
    this.props.onNameChange(ev.target.value);
  }

  onDrop= (ev, cat) => {
    let id = ev.dataTransfer.getData('id');
    this.props.onAddBook(id);
  }

  render() {
    return (
      <Container 
        onDragOver={(e)=>this.onDragOver(e)} 
        style={{ backgroundColor: '#cfe8fc', height: '100vh'}}
        onDrop={(e)=>this.onDrop(e, 'list')}    
      >
        <input
          value={this.props.listName}
          onChange={this.handleNameChange}
        />
        <BookList
          books={this.props.createListBooks}
          isRemoval={false}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={this.props.onSave}
        >
        SAVE LIST
        </Button>
      </Container>
    );
  }
}

export default CreateList